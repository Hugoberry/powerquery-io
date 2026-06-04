---
title: Text.ToList
---

# Text.ToList


Menghasilkan daftar nilai karakter dari nilai teks tertentu.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Remarks

Menghasilkan daftar nilai karakter dari nilai teks tertentu `text`.


## Examples

### Example #1
Membuat daftar nilai karakter dari teks "Hello World".
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
