---
title: Text.ToList
---

# Text.ToList


## Description

Mengembalikan senarai nilai aksara daripada nilai teks yang ditentukan.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Details

Mengembalikan senarai nilai aksara daripada nilai teks yang ditentukan <code>text</code>.


## Examples

### Example #1 
Cipta senarai nilai aksara daripada nilai teks &#34;Hello World&#34;.
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
