Installation:
Frontend:
1) Navigate to /frontend
2) run `npm install`

Backend:
1) Navigate to /backend
2) run `python3 -m virutalenv venv
3) run `source venv/bin/activate`
4) run `pip install -r requirements.txt`

Running in test environment:
Frontend:
1) Navigate to /frontend
2) run `npn start` after packages are installed

Backend
1) run `source backend/venv/bin/activate`
2) run `python start_backend.py` after packages are installed

Comments:
I didn't really get any feedback, on what y'all wanted exactly or any sort of clarification on questions I had. This seems like an incomplete entry.
The app is a standard webapp that can run serverless. Splitting up the frontend and backend instead of coupling them is better for scale. Frontend was created in reactjs using create-react-app as the template. Backend was created with Python using Flask as the web framework, Flask-Restful as the rest-api wrapper, and SQLAlchemy as the ORM.

To get ready for production, add tests and containerize the application.

Tested on Python3.9 on Kubuntu 21.10
