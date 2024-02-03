---
title: Text.ToList
---

# Text.ToList


## Description

Palauttaa merkkiarvoluettelon määritetystä tekstiarvosta.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Details

Palauttaa merkkiarvoluettelon määritetystä tekstiarvosta <code>text</code>.


## Examples

### Example #1 
Luo merkkiarvoluettelo tekstistä &#34;Hello World&#34;.
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
