from django.shortcuts import redirect
from django.contrib.auth.decorators import user_passes_test
from functools import wraps

def admin_required(view_func):
    @wraps(view_func)
    def wrapper(request, *args, **kwargs):
        if request.user.is_authenticated:
            if request.user.is_superuser:
                return view_func(request, *args, **kwargs)
        return redirect('trangchu') 
    return wrapper
