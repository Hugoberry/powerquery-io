---
title: Text.End
---

# Text.End


## Description

Mengembalikan aksara terakhir bagi teks.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Details

Mengembalikan nilai <code>text</code> yang merupakan aksara <code>count</code> terakhir bagi nilai <code>text</code> <code>text</code>.


## Examples

### Example #1 
Dapatkan 5 aksara terakhir bagi teks &#34;Hello, World&#34;.
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
