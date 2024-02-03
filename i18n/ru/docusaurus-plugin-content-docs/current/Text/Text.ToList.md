---
title: Text.ToList
---

# Text.ToList


## Description

Возвращает список значений символов из заданного текстового значения.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Details

Возвращает список значений символов из заданного текстового значения <code>text</code>.


## Examples

### Example #1 
Создать список значений символов из текста &#34;Hello World&#34;.
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
