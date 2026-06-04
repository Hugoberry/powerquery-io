---
title: Text.ToList
---

# Text.ToList


Palauttaa merkkiarvoluettelon määritetystä tekstiarvosta.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Remarks

Palauttaa merkkiarvoluettelon määritetystä tekstiarvosta `text`.


## Examples

### Example #1
Luo merkkiarvoluettelo tekstistä "Hello World".
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
