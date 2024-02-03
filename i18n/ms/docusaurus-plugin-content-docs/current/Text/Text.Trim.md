---
title: Text.Trim
---

# Text.Trim


## Description

Mengalih keluar semua ruang putih hadapan dan belakang.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Details

Mengembalikan hasil daripada mengalih keluar semua ruang putih hadapan dan belakang daripada nilai teks <code>text</code>.


## Examples

### Example #1 
Alih keluar semua ruang putih hadapan dan belakang daripada &#34;     a b c d    &#34;.
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```




## Category
Text.Transformations
