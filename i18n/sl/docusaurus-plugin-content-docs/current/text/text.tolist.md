---
title: Text.ToList
---

# Text.ToList


Vrne seznam vrednosti znakov iz dane besedilne vrednosti.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Remarks

Vrne seznam vrednosti znakov iz dane besedilne vrednosti `text`.


## Examples

### Example #1
Ustvarite seznam vrednosti znakov iz besedila"Hello World".
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
