---
title: Text.ToList
---

# Text.ToList


## Description

Retorna uma lista de valores de caractere do valor de texto especificado.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Details

Retorna uma lista de valores de caractere do valor de texto especificado <code>text</code>.


## Examples

### Example #1 
Crie uma lista de valores de caractere do texto &#34;Olá, Mundo&#34;.
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
