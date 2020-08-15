from django.db import models
from django.contrib.auth.models import User

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