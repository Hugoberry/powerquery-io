---
title: Text.ToList
---

# Text.ToList


## Description

Menghasilkan daftar nilai karakter dari nilai teks tertentu.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Details

Menghasilkan daftar nilai karakter dari nilai teks tertentu <code>text</code>.


## Examples

### Example #1 
Membuat daftar nilai karakter dari teks &#34;Hello World&#34;.
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
