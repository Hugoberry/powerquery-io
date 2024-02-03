---
title: Text.End
---

# Text.End


## Description

Menghasilkan karakter terakhir pada teks.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Details

Menghasilkan nilai <code>text</code> yang merupakan karakter terakhir <code>count</code> pada nilai <code>text</code> <code>text</code>.


## Examples

### Example #1 
Mengambil 5 karakter terakhir dari teks &#34;Hello, World&#34;.
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
