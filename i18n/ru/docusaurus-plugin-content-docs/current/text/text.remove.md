---
title: Text.Remove
---

# Text.Remove


Удаляет все вхождения заданного символа или списка символов из входного текстового значения.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Remarks

Возвращает копию текстового значения `text`, в которой удалены все символы с `removeChars`.


## Examples

### Example #1
Удалить символы "," и ";" из текстового значения.
```powerquery
Text.Remove("a,b;c", {",",";"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
