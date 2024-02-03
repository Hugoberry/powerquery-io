---
title: Text.TrimStart
---

# Text.TrimStart


## Description

Menghapus semua spasi depan.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Details

Memberikan hasil penghapusan semua spasi depan dari nilai teks <code>text</code>.


## Examples

### Example #1 
Menghapus spasi depan dari &#34;     a b c d    &#34;.
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```




## Category
Text.Transformations
