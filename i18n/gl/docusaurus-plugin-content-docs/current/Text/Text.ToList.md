---
title: Text.ToList
---

# Text.ToList


## Description

Devolve unha lista de valores de caracteres do valor de texto indicado.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Details

Devolve unha lista de valores de caracteres do valor de texto indicado <code>text</code>.


## Examples

### Example #1 
Crear unha lista de valores de caracteres do texto &#34;Ola, Mundo!&#34;.
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
