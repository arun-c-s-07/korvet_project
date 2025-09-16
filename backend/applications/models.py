from django.db import models
class Application(models.Model):
    full_name = models.CharField(max_length=200)
    email = models.EmailField()
    github_portfolio = models.URLField(blank=True, null=True)
    linkedin_profile = models.URLField(blank=True, null=True)
    why_fit = models.TextField()
    resume = models.FileField(upload_to="resumes/")
    role = models.CharField(max_length=100)

    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.full_name} - {self.role}"