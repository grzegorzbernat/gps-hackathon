Python / Flask app
==================

### Technical Stack

	- Python: python 3.7

  - Flask: 1.1.1

	- Database: MongoDB 4.0.13

### Create virtual environment for Python 3.7
  ```
    $ python3.7 -m venv env
    $ source env/bin/activate
    $ pip install Flask
  ```

  or 

  ```
    $ pip install -r requirements.txt
  ```

### configs

+ flask-app/app/.config.conf
+ flask-app/app/.logging.conf
+ flask-app/app/core/logger.py


+ flask-app/app/core/db.py

### Run server
  ```
    $ make run-app
  ```

### Server urls

  - http://localhost:7790
