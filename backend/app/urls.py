from django.urls import path
import app.views as views

urlpatterns = [
    path("number/", views.GenerateNumberView.as_view(), name = "number"),
    path("", views.IndexView.as_view(), name = "index")
    
]
