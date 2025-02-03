# Authentication
React And Django Secure Authentication
# Backend(Django)
<h3>intial steps </h3>
<ol>
    <li>pip install django</li>
    <li>pip install djangorestframework</li>
    <li>pip install django-cors-headers</li>
    <li>pip install djangorestframework-simplejwt</li>
</ol>


<h3>Django setup</h3>
<ol>
    <li>django-admin startproject backend</li>
    <li>cd backend</li>
    <li>python manage.py  startapp base</li>
</ol>


<u>settings.py</u>
<pre>
    INSTALLED_APPS = [
    ...,
    'rest_framework',
    'corsheaders',
     'rest_framework_simplejwt',
     'base',
    ...,
]
</pre>
<pre>
    REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
      'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
         'rest_framework.permissions.AllowAny',
    ]
}
</pre>
<pre>
    MIDDLEWARE = [
    ...,
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    ...,
]
</pre>
<pre>
    CORS_ALLOWED_ORIGINS = [
    
    "http://localhost:3000",
   
]
CORS_ALLOW_CREDENTIALS = True
</pre>
<p>python manage.py migrate</p>
<p>python manage.py createsuperuser</p>

<pre> <h5>base/urls.py</h5>
    from django.urls import path
    from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,)

urlpatterns = [
    ...
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    ...
]
</pre>

# Frontend(React)
<h3>intial steps </h3>
<o>
    <li>npx create-react-app frontend</li>
    <li>cd frontend</li>
    <li>npm install axios</li>
    <li>npm install react-router-dom</li>
    <li>npm i @chakra-ui/react</li>
</o>
