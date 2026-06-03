---
title: Text.ToList
---

# Text.ToList


Devolve uma lista de valores de caráter a partir do valor de texto especificado.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Remarks

Devolve uma lista de valores de caráter a partir do valor de texto especificado `text`.


## Examples

### Example #1
Criar uma lista de valores de caráter a partir do texto "Olá Mundo".
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
