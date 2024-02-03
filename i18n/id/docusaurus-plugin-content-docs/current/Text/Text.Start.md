---
title: Text.Start
---

# Text.Start


## Description

Menghasilkan awal teks.


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Details

Menghasilkan karakter <code>count</code> pertama dari <code>text</code> sebagai nilai teks.


## Examples

### Example #1 
Mengambil 5 karakter pertama dari &#34;Hello, World&#34;.
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```




## Category
Text.Extraction
