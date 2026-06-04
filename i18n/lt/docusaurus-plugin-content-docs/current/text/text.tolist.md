---
title: Text.ToList
---

# Text.ToList


Pateikiamas sąrašas simbolių reikšmių iš nurodytos tekstinės reikšmės.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Remarks

Pateikiamas sąrašas simbolių reikšmių iš nurodytos tekstinės reikšmės `text`.


## Examples

### Example #1
Sukurkite sąrašą simbolių reikšmių iš teksto „Hello World“.
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
