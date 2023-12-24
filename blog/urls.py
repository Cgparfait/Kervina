from django.urls import path
from .views import post_list, post_detail, post_like

urlpatterns = [
    path('', post_list, name='post_list'),
    path('post/<int:post_id>/', post_detail, name='post_detail'),
    path('post/<int:post_id>/like/', post_like, name='post_like'),
]