---
title: Text.TrimEnd
---

# Text.TrimEnd


## Description

Menghapus semua spasi belakang.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Details

Memberikan hasil penghapusan semua spasi belakang dari nilai teks <code>text</code>.


## Examples

### Example #1 
Menghapus spasi belakang dari &#34;     a b c d    &#34;.
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```




## Category
Text.Transformations
