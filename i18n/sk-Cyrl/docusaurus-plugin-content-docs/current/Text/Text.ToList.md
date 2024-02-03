---
title: Text.ToList
---

# Text.ToList


## Description

Vráti zoznam hodnôt znakov z danej textovej hodnoty.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Details

Vráti zoznam hodnôt znakov z danej textovej hodnoty <code>text</code>.


## Examples

### Example #1 
Vytvorte zoznam hodnôt znakov z textu &#34;Hello World&#34;.
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
