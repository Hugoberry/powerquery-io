---
title: Text.Start
---

# Text.Start


## Description

Mengembalikan permulaan teks.


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Details

Mengembalikan <code>count</code> aksara pertama bagi <code>text</code> sebagai nilai teks.


## Examples

### Example #1 
Dapatkan 5 aksara pertama bagi &#34;Hello, World&#34;.
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```




## Category
Text.Extraction
