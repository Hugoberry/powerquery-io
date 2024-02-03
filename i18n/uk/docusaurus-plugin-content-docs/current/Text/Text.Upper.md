---
title: Text.Upper
---

# Text.Upper


## Description

Перетворює всі символи на верхній регістр.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Details

Повертає результат перетворення всіх символів параметра <code>text</code> на символи верхнього регістру. Крім того, можна вказати необов’язковий параметр <code>culture</code> (наприклад, "uk-UA").


## Examples

### Example #1 
Отримати варіант &#34;aBcD&#34; у верхньому регістрі.
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
