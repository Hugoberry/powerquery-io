---
title: Text.Replace
---

# Text.Replace


## Description

Замінює всі повторення вказаного підрядка в тексті.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Повертає результат заміни всіх повторів текстового значення <code>old</code> у текстовому значенні <code>text</code> на текстове значення <code>new</code>. Ця функція чутлива до регістру.


## Examples

### Example #1 
Замінити кожне повторення &#34;the&#34; у реченні на &#34;a&#34;.
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
