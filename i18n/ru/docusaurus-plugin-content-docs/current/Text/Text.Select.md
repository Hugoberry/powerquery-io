---
title: Text.Select
---

# Text.Select


## Description

Выделяет все вхождения заданного символа или списка символов из входного текстового значения.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Details

Возвращает копию текстового значения <code>text</code>, из которой удалены все символы, которых нет в <code>selectChars</code>.  


## Examples

### Example #1 
Выберите в текстовом значении все символы в диапазоне от &#34;а&#34; до &#34;я&#34;.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
