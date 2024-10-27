# Authentication
React And Django Secure Authentication
<u>intial steps </u>
1.pip install django
2.pip install djangorestframework
3.pip install django-cors-headers
4.pip install djangorestframework-simplejwt

<u>Django setup</u>
1.django-admin startproject backend
2. cd backend
3.python manage.py  startapp base

<u>settings.py</u>
INSTALLED_APPS = [
    ...,
    "corsheaders",
     'rest_framework_simplejwt',
     'base',
    ...,
]
