---
title: Text.ToList
---

# Text.ToList


Mengembalikan senarai nilai aksara daripada nilai teks yang ditentukan.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Remarks

Mengembalikan senarai nilai aksara daripada nilai teks yang ditentukan `text`.


## Examples

### Example #1
Cipta senarai nilai aksara daripada nilai teks "Hello World".
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
