---
title: Text.At
---

# Text.At


Menghasilkan karakter pada posisi yang ditetapkan.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Remarks

Menghasilkan karakter pada nilai teks, `text` di posisi `index`. Karakter pertama pada teks ada di posisi 0.


## Examples

### Example #1
Mencari karakter di posisi 4 pada string "Hello, World".
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
