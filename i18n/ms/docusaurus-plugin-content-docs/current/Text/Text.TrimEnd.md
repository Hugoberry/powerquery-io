---
title: Text.TrimEnd
---

# Text.TrimEnd


## Description

Mengalih keluar semua ruang putih belakang.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Details

Mengembalikan hasil daripada mengalih keluar semua ruang putih belakang daripada nilai teks <code>text</code>.


## Examples

### Example #1 
Alih keluar ruang putih belakang daripada &#34;     a b c d    &#34;.
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```




## Category
Text.Transformations
