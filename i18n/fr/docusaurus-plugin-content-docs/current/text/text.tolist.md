---
title: Text.ToList
---

# Text.ToList


Retourne une liste de valeurs de caractère depuis la valeur de texte spécifiée.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Remarks

Retourne une liste de valeurs de caractère depuis la valeur de texte spécifiée `text`.


## Examples

### Example #1
Crée une liste de valeurs de caractère à partir du texte "Hello World".
```powerquery
Text.ToList("Hello World")
```

Result: 
```powerquery
{
    "H",
    "e",
    "l",
    "l",
    "o",
    " ",
    "W",
    "o",
    "r",
    "l",
    "d"
}
```




## Category
Text.Conversions from and to text
