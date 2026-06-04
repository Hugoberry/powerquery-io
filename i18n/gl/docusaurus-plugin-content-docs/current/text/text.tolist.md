---
title: Text.ToList
---

# Text.ToList


Devolve unha lista de valores de caracteres do valor de texto indicado.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Remarks

Devolve unha lista de valores de caracteres do valor de texto indicado `text`.


## Examples

### Example #1
Crear unha lista de valores de caracteres do texto "Ola, Mundo!".
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
