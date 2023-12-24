from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth.decorators import login_required
from .models import Post, Like
from .forms import CommentForm

@login_required
def post_like(request, post_id):
    post = get_object_or_404(Post, pk=post_id)
    like, created = Like.objects.get_or_create(post=post, user=request.user)

    if not created:
        like.delete()

    return redirect('post_detail', post_id=post.id)

def post_detail(request, post_id):
    post = get_object_or_404(Post, pk=post_id)
    comments = post.comment_set.all()
    like_status = False

    if request.user.is_authenticated:
        like_status = Like.objects.filter(post=post, user=request.user).exists()

    if request.method == 'POST':
        form = CommentForm(request.POST)
        if form.is_valid():
            comment = form.save(commit=False)
            comment.post = post
            comment.author = request.user
            comment.save()
            return redirect('post_detail', post_id=post.id)
    else:
        form = CommentForm()

    return render(request, 'blog/post_detail.html', {'post': post, 'comments': comments, 'form': form, 'like_status': like_status})


def post_list(request):
    posts = Post.objects.all()
    context = {'posts':posts}
    return render(request, 'blog/base.html', context)
