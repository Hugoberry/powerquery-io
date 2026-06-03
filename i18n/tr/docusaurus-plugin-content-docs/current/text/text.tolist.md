---
title: Text.ToList
---

# Text.ToList


Verilen metin değerinden bir karakter değerleri listesi döndürür.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Remarks

`text` verilen metin değerinden bir karakter değerleri listesi döndürür.


## Examples

### Example #1
"Hello World" metninden bir karakter değerleri listesi oluşturur.
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
