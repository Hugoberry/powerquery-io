---
title: Text.ToList
---

# Text.ToList


## Description

Vraća listu vrednosti znakova iz date tekstualne vrednosti.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Details

Vraća listu vrednosti znakova iz date tekstualne vrednosti <code>text</code>.


## Examples

### Example #1 
Kreiranje liste vrednosti znakova od teksta „Hello World“.
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
