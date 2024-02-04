---
title: Text.ToList
---

# Text.ToList


## Description

Devolve uma lista de valores de caráter a partir do valor de texto especificado.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Details

Devolve uma lista de valores de caráter a partir do valor de texto especificado <code>text</code>.


## Examples

### Example #1 
Criar uma lista de valores de caráter a partir do texto &#34;Olá Mundo&#34;.
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
