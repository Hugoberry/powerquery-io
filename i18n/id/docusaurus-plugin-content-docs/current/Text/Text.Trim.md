---
title: Text.Trim
---

# Text.Trim


## Description

Menghapus semua spasi depan dan belakang.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Details

Memberikan hasil penghapusan semua spasi depan dan belakang dari nilai teks <code>text</code>.


## Examples

### Example #1 
Menghapus spasi depan dan belakang dari &#34;     a b c d    &#34;.
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```




## Category
Text.Transformations
