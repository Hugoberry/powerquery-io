---
title: Text.At
---

# Text.At


Mengembalikan aksara pada kedudukan yang ditentukan.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Remarks

Mengembalikan aksara dalam nilai teks, `text` di kedudukan `index`. Aksara pertama dalam teks ialah pada kedudukan 0.


## Examples

### Example #1
Cari aksara di kedudukan 4 dalam rentetan "Hello, World".
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
