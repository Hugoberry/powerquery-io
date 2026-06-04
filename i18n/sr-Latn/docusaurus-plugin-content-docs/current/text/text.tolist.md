---
title: Text.ToList
---

# Text.ToList


Vraća listu vrednosti znakova iz date tekstualne vrednosti.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Remarks

Vraća listu vrednosti znakova iz date tekstualne vrednosti `text`.


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
