"""otherworks URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from app import views

urlpatterns = [
        # auth
    path('registration/signup', views.signup, name="signup"),
    path('registration/login', views.login, name="login"),
    path('registration/logout', views.logout, name="logout"),
    
    path('admin/', admin.site.urls),
    path('', views.home, name="home"),
    path('about/', views.about, name="about"),
    path('works/', views.works, name="works"),
    path('works/1', views.works1, name="1"),
    path('community/', views.community, name="community"),
    path('contact/', views.contact, name="contact"),
    path('index/', views.index, name="index"),
    path('create/', views.create, name="create"),
    path('<int:post_pk>/detail', views.detail, name="detail"),
    path('<int:post_pk>/update', views.update, name='update'),
    path('<int:post_pk>/delete', views.delete, name="delete"),
    path('vscode/', views._vscode, name="vscode"),
    
    path('excel/', views.excel, name="excel"),
    path('excel/omok/', views.excel_omok, name="excel_omok"),
    path('excel/<str:title>/', views.excel_title, name="excel_title"),

    path('buyPremium/', views.buyPremium, name="buyPremium"),
]
