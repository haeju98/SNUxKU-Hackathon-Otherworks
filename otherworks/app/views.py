from django.shortcuts import render,redirect

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

def premiere(request):
    return render(request, 'premiere.html')