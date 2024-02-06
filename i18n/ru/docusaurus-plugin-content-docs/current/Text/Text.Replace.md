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

Возвращает результат замены всех вхождений текстового значения <code>old</code> в текстовом значении <code>text</code> текстовым значением <code>new</code>. В этой функции учитывается регистр.


## Examples

### Example #1 
Заменить все вхождения &#34;the&#34; в предложении на &#34;а&#34;.
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
