from flask import Flask, send_from_directory, request, jsonify
from flask_cors import CORS
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__, static_folder='../dist')
CORS(app)

# Configuration
SMTP_HOST = os.getenv('SMTP_HOST', 'smtp.gmail.com')
SMTP_PORT = int(os.getenv('SMTP_PORT', 587))
SMTP_USER = os.getenv('SMTP_USER')
SMTP_PASSWORD = os.getenv('SMTP_PASSWORD')
CONTACT_EMAIL = os.getenv('CONTACT_EMAIL', 'contact@saivikas.work')


@app.route('/')
def serve_spa():
    """Serve the React SPA"""
    return send_from_directory(app.static_folder, 'index.html')


@app.route('/<path:path>')
def serve_static(path):
    """Serve static files"""
    if os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')


@app.route('/api/health')
def health_check():
    """Health check endpoint"""
    return jsonify({'status': 'healthy', 'message': 'Server is running'}), 200


@app.route('/api/contact', methods=['POST'])
def handle_contact():
    """Handle contact form submissions"""
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['name', 'email', 'subject', 'message']
        for field in required_fields:
            if not data.get(field):
                return jsonify({'error': f'{field} is required'}), 400
        
        # Validate email format
        email = data.get('email')
        if '@' not in email or '.' not in email:
            return jsonify({'error': 'Invalid email format'}), 400
        
        # Send email
        if SMTP_USER and SMTP_PASSWORD:
            send_email(
                name=data.get('name'),
                email=email,
                subject=data.get('subject'),
                message=data.get('message')
            )
        else:
            # Log to console if SMTP not configured
            print(f"Contact form submission from {data.get('name')} ({email})")
            print(f"Subject: {data.get('subject')}")
            print(f"Message: {data.get('message')}")
        
        return jsonify({'message': 'Message sent successfully'}), 200
    
    except Exception as e:
        print(f"Error handling contact form: {str(e)}")
        return jsonify({'error': 'Failed to send message'}), 500


def send_email(name, email, subject, message):
    """Send email using SMTP"""
    try:
        # Create message
        msg = MIMEMultipart()
        msg['From'] = SMTP_USER
        msg['To'] = CONTACT_EMAIL
        msg['Subject'] = f"Portfolio Contact: {subject}"
        
        # Email body
        body = f"""
        New contact form submission:
        
        Name: {name}
        Email: {email}
        Subject: {subject}
        
        Message:
        {message}
        """
        
        msg.attach(MIMEText(body, 'plain'))
        
        # Send email
        with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_USER, SMTP_PASSWORD)
            server.send_message(msg)
        
        print(f"Email sent successfully to {CONTACT_EMAIL}")
    
    except Exception as e:
        print(f"Error sending email: {str(e)}")
        raise


if __name__ == '__main__':
    port = int(os.getenv('PORT', 8000))
    debug = os.getenv('FLASK_ENV') == 'development'
    app.run(host='0.0.0.0', port=port, debug=debug)
