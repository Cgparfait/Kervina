from django.db import models


from django.db import models
from django.contrib.auth.models import User
import PIL
from ckeditor.fields import RichTextField
#from tinymce


class Author(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField()

class Post(models.Model):
    thumbnail = models.ImageField(upload_to='cover/', null=True)
    title = models.CharField(max_length=255)
    content = RichTextField(blank=True, null=True)
    #content=models.TextField(null=True)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

class Like(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)