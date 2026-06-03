---
title: Text.At
---

# Text.At


Belirtilen konumdaki karakteri döndürür.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Remarks

`text` metin değerindeki, `index` konumundaki karakteri döndürür. Metindeki ilk karakter 0 konumundadır.


## Examples

### Example #1
"Hello, World" dizesinde 4 konumunda bulunan karakteri bulur.
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
