---
title: Text.Clean
---

# Text.Clean


## Description

Повертає текстове значення з видаленими недрукованими символами.


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Details

Повертає текстове значення з усіма видаленими керівними символами параметра <code>text</code>.


## Examples

### Example #1 
Видаляє з текстового значення символи переведення рядка та інші недруковані символи.
```powerquery
Text.Clean("ABC#(lf)D")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
