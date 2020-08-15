from django import template
import random

register = template.Library()

@register.filter
def index(indexable, i):
    return indexable[i]

@register.filter
def multiply(value, arg):
    return value * arg


@register.simple_tag
def random_int(a, b=None):
    if b is None:
        a, b = 0, a
    return random.randint(a, b)