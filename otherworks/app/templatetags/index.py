from django import template

register = template.Library()

@register.filter
def index(indexable, i):
    return indexable[i]

@register.filter
def multiply(value, arg):
    return value * arg
