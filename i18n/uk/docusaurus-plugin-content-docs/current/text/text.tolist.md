---
title: Text.ToList
---

# Text.ToList


Повертає список значень символів із заданого текстового значення.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Remarks

Повертає список значень символів із заданого текстового значення `text`.


## Examples

### Example #1
Створити список значень символів з тексту "Hello World".
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
