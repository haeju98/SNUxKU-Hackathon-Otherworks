from django.db import models
from django.contrib.auth.models import User
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFill
# Create your models here.
# 웹툰
class webtoon(models.Model):
    idx = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=100)
    link = models.CharField(max_length=1000)
    detaild_link = models.CharField(max_length=1000)
    images = models.CharField(max_length=50000)
    

#웹소설
class webnovel(models.Model):
    idx = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=100)
    link = models.CharField(max_length=1000)
    detaild_link = models.CharField(max_length=1000)
    content = models.CharField(max_length=50000)


#특가상품
class price_deal(models.Model):
    market = models.CharField(max_length=20)
    idx = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=100)
    price = models.IntegerField()
    link = models.CharField(max_length=1000)
    
#커뮤니티 글
class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()   
    image = ProcessedImageField(
               upload_to='img/', # 저장 위치
               processors=[ResizeToFill(600,600)], # 처리할 작업 목록
               format='JPEG', # 저장 포맷(확장자)
               options= {'quality': 90 }, # 저장 포맷 관련 옵션 (JPEG 압축률 설정)
               null=True,
               blank=True
    )
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts', null=True)
    
    def __str__(self):
        return self.title