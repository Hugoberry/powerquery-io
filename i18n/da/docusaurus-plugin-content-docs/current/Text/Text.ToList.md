---
title: Text.ToList
---

# Text.ToList


## Description

Returnerer en liste over tegnværdier fra den angivne tekstværdi.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Details

Returnerer en liste over tegnværdier fra den angivne tekstværdi <code>text</code>.


## Examples

### Example #1 
Opret en liste over tegnværdier ud fra teksten &#34;Hello World&#34;.
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
