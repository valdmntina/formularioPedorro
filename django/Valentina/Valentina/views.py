from django.http import HttpResponse

def saludar(requets):
    return HttpResponse("Holi")