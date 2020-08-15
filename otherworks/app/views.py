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

def works1(request):
    return render(request, '_works1.html')

def works2(request):
    return render(request, '_works2.html')

def works3(request):
    return render(request, '_works3.html')

def works4(request):
    return render(request, '_works4.html')