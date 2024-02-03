---
title: Text.At
---

# Text.At


## Description

Mengembalikan aksara pada kedudukan yang ditentukan.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Details

Mengembalikan aksara dalam nilai teks, <code>text</code> di kedudukan <code>index</code>. Aksara pertama dalam teks ialah pada kedudukan 0.


## Examples

### Example #1 
Cari aksara di kedudukan 4 dalam rentetan &#34;Hello, World&#34;.
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
