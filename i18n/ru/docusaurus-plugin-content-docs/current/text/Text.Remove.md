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

Возвращает копию текстового значения <code>text</code>, в которой удалены все символы с <code>removeChars</code>.  


## Examples

### Example #1 
Удалить символы &#34;,&#34; и &#34;;&#34; из текстового значения.
```powerquery
Text.Remove("a,b;c", {",",";"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
