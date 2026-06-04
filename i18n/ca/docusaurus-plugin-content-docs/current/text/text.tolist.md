---
title: Text.ToList
---

# Text.ToList


Retorna una llista de valors de caràcter a partir del valor de text donat.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Remarks

Retorna una llista de valors de caràcter a partir del valor de text donat `text`.


## Examples

### Example #1
Crea una llista de caràcters a partir del text "Hello World".
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
