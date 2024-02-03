---
title: Text.At
---

# Text.At


## Description

Menghasilkan karakter pada posisi yang ditetapkan.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Details

Menghasilkan karakter pada nilai teks, <code>text</code> di posisi <code>index</code>. Karakter pertama pada teks ada di posisi 0.


## Examples

### Example #1 
Mencari karakter di posisi 4 pada string &#34;Hello, World&#34;.
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
