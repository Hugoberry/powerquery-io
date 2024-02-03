---
title: Text.SplitAny
---

# Text.SplitAny


## Description

Mengembalikan senarai nilai teks, dipisahkan pada sebarang aksara dalam pemisah.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Details

Mengembalikan senarai nilai teks yang terhasil daripada memisahkan nilai teks <code>text</code> berdasarkan pada sebarang aksara dalam pemisah yang ditentukan, <code>separators</code>.


## Examples

### Example #1 
Cipta senarai daripada nilai teks &#34;Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com&#34;.
```powerquery
Text.SplitAny("Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com", "|")
```

Result: 
```powerquery
{
    "Jamie",
    "Campbell",
    "Admin",
    "Adventure Works",
    "www.adventure-works.com"
}
```




## Category
Text.Transformations
