from flask import Flask, render_template, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'your_database_uri_here'
db = SQLAlchemy(app)

class Subscriber(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), nullable=False)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/autocomplete/<prefix>')
def autocomplete(prefix):
    subscribers = Subscriber.query.filter(Subscriber.username.like(f'{prefix}%')).all()
    suggestions = [subscriber.username for subscriber in subscribers]
    return jsonify(suggestions)

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)
