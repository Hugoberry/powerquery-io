---
title: Text.ToList
---

# Text.ToList


Retorna uma lista de valores de caractere do valor de texto especificado.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Remarks

Retorna uma lista de valores de caractere do valor de texto especificado `text`.


## Examples

### Example #1
Crie uma lista de valores de caractere do texto "Olá, Mundo".
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
