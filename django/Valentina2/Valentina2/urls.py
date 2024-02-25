
from . import views

from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('saludar/<str:name>/<int:age>/', views.saludar, name="saludar")
]
