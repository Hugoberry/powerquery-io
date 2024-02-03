---
title: Text.ToList
---

# Text.ToList


## Description

Returnează o listă de valori de caractere din valoarea text dată.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Details

Returnează o listă de valori de caractere din valoarea text dată <code>text</code>.


## Examples

### Example #1 
Creaţi o listă de valori de caractere din textul „Hello World”.
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
