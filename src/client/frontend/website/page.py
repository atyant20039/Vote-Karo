from flask import Blueprint, render_template

page = Blueprint('page', __name__)

@page.route('/', methods=['GET', 'POST'])
def webpage():
    if request.method == 'POST':
        voterid = request.form.get('voterid')
        choice = request.form.get('radiolist')
    return render_template("webpage.html")
