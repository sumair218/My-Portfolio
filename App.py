from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/mission.html')
def mission():
    return render_template('mission.html')

@app.route('/project.html')
def project():
    return render_template('project.html')

if __name__ == '__main__':
    app.run(debug=True)