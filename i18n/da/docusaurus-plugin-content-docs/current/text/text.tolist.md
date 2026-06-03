---
title: Text.ToList
---

# Text.ToList


Returnerer en liste over tegnværdier fra den angivne tekstværdi.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Remarks

Returnerer en liste over tegnværdier fra den angivne tekstværdi `text`.


## Examples

### Example #1
Opret en liste over tegnværdier ud fra teksten "Hello World".
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
