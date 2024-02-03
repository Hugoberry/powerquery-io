---
title: Text.TrimStart
---

# Text.TrimStart


## Description

Mengalih keluar semua ruang putih hadapan.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Details

Mengembalikan hasil daripada mengalih keluar semua ruang putih hadapan daripada nilai teks <code>text</code>.


## Examples

### Example #1 
Alih keluar ruang putih hadapan daripada &#34;     a b c d    &#34;.
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```




## Category
Text.Transformations
