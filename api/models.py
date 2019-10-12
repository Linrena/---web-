from django.db import models

# Create your models here.
class userInfo:
    username = models.CharField(max_length=20, unique=True)
    password = models.CharField(max_length=20)