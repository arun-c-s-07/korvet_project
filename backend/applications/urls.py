from django.urls import path
from .views import ApplicationView

urlpatterns = [
    path("apply/", ApplicationView.as_view(), name="apply"),
]