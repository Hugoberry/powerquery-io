---
title: Text.SplitAny
---

# Text.SplitAny


## Description

Menghasilkan daftar nilai teks yang terbagi di salah satu karakter pada pembatas.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Details

Memberikan daftar nilai teks yang dihasilkan dari membagi nilai teks <code>text</code> berdasarkan karakter apa pun pada pembatas yang ditetapkan, <code>separators</code>.


## Examples

### Example #1 
Membuat daftar dari nilai teks &#34;Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com&#34;.
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
