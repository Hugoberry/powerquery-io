---
title: Text.End
---

# Text.End


Mengembalikan aksara terakhir bagi teks.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Remarks

Mengembalikan nilai `text` yang merupakan aksara `count` terakhir bagi nilai `text` `text`.


## Examples

### Example #1
Dapatkan 5 aksara terakhir bagi teks "Hello, World".
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
