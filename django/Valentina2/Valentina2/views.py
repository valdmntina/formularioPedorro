from django.shortcuts import render

def saludar(requets, name, age):
    context = {
        'name': name,
        'age': age
        
    }
    return render(requets, 'saludo.html', context)
