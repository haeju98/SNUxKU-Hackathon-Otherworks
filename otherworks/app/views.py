from django.shortcuts import render,redirect
from .novel import *

# Create your views here.
def home(request):
    return render(request,'home.html')

def about(request):
    return render(request, 'about.html')

def works(request):
    return render(request, 'works.html')

def community(request):
    return render(request, 'community.html')

def contact(request):
    return render(request, 'contact.html')

def excel(request):
    if request.method == 'GET':
        title_list = get_title_list()
        return render(request, 'excel.html', {'title_list' : title_list})