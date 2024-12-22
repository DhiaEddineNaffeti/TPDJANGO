from django.contrib import admin
from django.urls import path, include
from tutorials import views  # Ensure this import is at the top

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/tutorials/', views.tutorial_list),  # Correct route to your view
]
