---
title: Text.ToList
---

# Text.ToList


Vráti zoznam hodnôt znakov z danej textovej hodnoty.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Remarks

Vráti zoznam hodnôt znakov z danej textovej hodnoty `text`.


## Examples

### Example #1
Vytvorte zoznam hodnôt znakov z textu "Hello World".
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
