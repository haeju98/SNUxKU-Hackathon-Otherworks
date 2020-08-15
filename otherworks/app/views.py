from django.shortcuts import render,redirect
from .novel import *
from .models import*
from django.http import JsonResponse
import math

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
    if request.method =="GET":
        webnovels = webnovel.objects.all()
        title_list = []
        for i in webnovels:
            title_list.append(i.title)

        return render(request, 'excel.html', {'title_list' : title_list})
    elif request.method == "POST":
        title = request.POST['title']
        context = {
            'title' : title
        }

        return JsonResponse(context)

def excel_omok(request):
    return render(request, 'excel_omok.html')


def excel_title(request, title):
    webnovels = webnovel.objects.filter(title = title)
    content = ""
    for i in webnovels:
        content += i.content
    
    
    content.replace('\r', "")
    content.replace('\n', "")   
    
    content_list=[]
    temp=""
    for i in content :
        if i != " ":
            if  i == '“' or i == '‘' :
                if temp != "" :
                    content_list.append(temp)
                
                rest = 12-(len(content_list)%12)
                for j in range(rest):
                    content_list.append("")
                content_list.append(i)
                temp = ""
                continue
            elif i == '”' or i =='’':
                if temp != "":
                    content_list.append(temp)

                content_list.append(i)
                rest = 12-(len(content_list)%12)
                for j in range(rest):
                    content_list.append("")
                temp = ""
                continue
            else:
                temp += i
        else:
            if temp !="":
                content_list.append(temp)
                temp = ""
    content_list.append(temp)
    
    value = math.ceil(len(content_list)/12)
    rest = len(content_list)%12
    range1 = range(value)

    return render(request, 'excel_title.html', {'title' : title, 'content_list':content_list, 'range1':range1, 'rest': rest})