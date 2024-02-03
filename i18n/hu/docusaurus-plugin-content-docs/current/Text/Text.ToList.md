---
title: Text.ToList
---

# Text.ToList


## Description

A megadott szöveges értékben szereplő karakteres értékek listáját adja vissza.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Details

A megadott <code>text</code> szöveges értékben szereplő karakteres értékek listáját adja vissza.


## Examples

### Example #1 
A „Hello World” szövegben szereplő karakteres értékek listájának létrehozása
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
