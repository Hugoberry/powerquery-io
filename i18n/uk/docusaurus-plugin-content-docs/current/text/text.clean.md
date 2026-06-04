---
title: Text.Clean
---

# Text.Clean


Повертає текстове значення з видаленими недрукованими символами.


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Remarks

Повертає текстове значення з усіма видаленими керівними символами параметра `text`.


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
