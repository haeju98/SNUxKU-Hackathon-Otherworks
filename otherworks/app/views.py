from django.shortcuts import render,redirect,get_object_or_404
from .models import webnovel
from .models import Post
from .forms import PostForm
from django.contrib import messages
from django.views import View
from django.http import JsonResponse, HttpResponse
from django.core.paginator import Paginator
from django.contrib.auth.models import User
from django.contrib import auth
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
import json
# Create your views here.
def home(request):
    return render(request,'home.html')

def about(request):
    return render(request, 'about.html')

def works(request):
    return render(request, 'works.html')

def community(request):
    return redirect('index')

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

def _vscode(request):
    webnovels = webnovel.objects.all()
    title_list = []
    content_list = []
    for i in webnovels:
        title_list.append(i.title)
        content_list.append(i.content)
    zip_nov = dict(zip(title_list, content_list))
    

    return render(request, '_vscode.html', {"title_list":title_list, 'content_list':content_list, 'zip_nov':zip_nov})

# Create your views here.
def signup(request):
    if(request.method == 'POST'):
        found_user = User.objects.filter(username=request.POST['username'])
        if (len(found_user)> 0):
            error = 'username이 이미 존재합니다.'
            return render(request, 'registration/signup.html', {'error': error})
        
        new_user = User.objects.create_user(
            username = request.POST['username'],
            password = request.POST['password']
        )
        auth.login(request, new_user)
        return redirect('index')
    
    return render(request, 'registration/signup.html')

def login(request):
    if(request.method == 'POST'):
        found_user = auth.authenticate(
            username = request.POST['username'],
            password = request.POST['password']
        )
        if (found_user is None):
            error = '아이디 또는 비밀번호가 틀렸습니다'
            return render(request, 'registration/login.html', {'error' : error})
        
        auth.login(
            request, 
            found_user,
            backend='django.contrib.auth.backends.ModelBackend'
        )
        return redirect(request.GET.get('next', '/app/'))
    return render(request, 'registration/login.html')

def logout(request):
    auth.logout(request)
    return redirect('index')

@login_required(login_url='/registration/login')
def create(request):
    if request.method == 'POST':
        post_form = PostForm(request.POST,request.FILES)
        if post_form.is_valid():
            post = post_form.save()
            post.author = request.user
            post.save()
            return redirect('index')

    else:
        post_form = PostForm()
        
        return render(request, 'create.html', {'post_form': post_form})
    

def detail(request, post_pk):
    post = Post.objects.get(pk=post_pk)
    return render(request, 'detail.html', {'post': post})

def index(request):
    posts = Post.objects.all()
    paginator = Paginator(posts, 10)
    page = request.GET.get('page')
    post_page = paginator.get_page(page)
    return render(request, 'index.html', {'posts': posts, 'post_page':post_page})

def delete(request, post_pk):
    # post = Post.objects.get(pk=post_pk)
    post = get_object_or_404(Post, pk=post_pk)
    post.delete()
    return redirect('index')

def update(request, post_pk):
    post = get_object_or_404(Post, pk=post_pk)
    print(post.image)
    if request.method == 'POST':
        postform = PostForm(request.POST, request.FILES, instance=post)
        print(request.FILES)
        if postform.is_valid():
            postform.save()
            return redirect('detail', post_pk)
    
    else:
        postform = PostForm(instance=post)
        return render(request, 'update.html', {'postform':postform})