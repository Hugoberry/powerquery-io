---
title: Text.End
---

# Text.End


Menghasilkan karakter terakhir pada teks.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Remarks

Menghasilkan nilai `text` yang merupakan karakter terakhir `count` pada nilai `text` `text`.


## Examples

### Example #1
Mengambil 5 karakter terakhir dari teks "Hello, World".
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
