
from django.urls import path
from . import views
urlpatterns = [
    path('token/',views.CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/',views.CustomRefreshTokenView.as_view(), name='token_refresh'),
    path('notes/',views.get_notes,name="notes"),
    path('logout/',views.logout,name='logout'),
    path('authenticated/',views.is_authenticated,name='is_authenticated'),
    path('register/',views.register,name='register')

]