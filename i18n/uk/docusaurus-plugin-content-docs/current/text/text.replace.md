---
title: Text.Replace
---

# Text.Replace


Замінює всі повторення вказаного підрядка в тексті.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Повертає результат заміни всіх повторів текстового значення `old` у текстовому значенні `text` на текстове значення `new`. Ця функція чутлива до регістру.


## Examples

### Example #1
Замінити кожне повторення "the" у реченні на "a".
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
