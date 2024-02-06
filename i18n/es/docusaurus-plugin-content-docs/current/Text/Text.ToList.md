---
title: Text.ToList
---

# Text.ToList


Devuelve una lista de valores de carácter a partir del valor de texto dado.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Remarks

Devuelve una lista de valores de carácter a partir del valor de texto dado <code>text</code>.


## Examples

### Example #1 
Crear una lista de valores de carácter a partir del texto &#34;Hola mundo.&#34;.
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
