---
title: Text.ToList
---

# Text.ToList


## Description

Повертає список значень символів із заданого текстового значення.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Details

Повертає список значень символів із заданого текстового значення <code>text</code>.


## Examples

### Example #1 
Створити список значень символів з тексту &#34;Hello World&#34;.
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
