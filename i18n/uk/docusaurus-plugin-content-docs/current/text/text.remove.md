---
title: Text.Remove
---

# Text.Remove


Видаляє всі входження заданого символу або списку символів із вхідного текстового значення.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Remarks

Повертає копію текстового значення `text` із видаленими всіма символами, починаючи з `removeChars`.


## Examples

### Example #1
Видалити символи "," та ";" з текстового значення.
```powerquery
Text.Remove("a,b;c", {",",";"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
