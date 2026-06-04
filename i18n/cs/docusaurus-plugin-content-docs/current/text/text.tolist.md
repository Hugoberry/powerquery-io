---
title: Text.ToList
---

# Text.ToList


Vrací seznam znakových hodnot z předané textové hodnoty.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Remarks

Vrací seznam znakových hodnot z předané textové hodnoty `text`.


## Examples

### Example #1
Vytvoří seznam znakových hodnot z textu Hello World.
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
