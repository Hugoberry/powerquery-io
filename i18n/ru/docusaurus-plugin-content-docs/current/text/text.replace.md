---
title: Text.Replace
---

# Text.Replace


Заменяет все вхождения заданной подстроки в тексте.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Возвращает результат замены всех вхождений текстового значения `old` в текстовом значении `text` текстовым значением `new`. В этой функции учитывается регистр.


## Examples

### Example #1
Заменить все вхождения "the" в предложении на "а".
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
