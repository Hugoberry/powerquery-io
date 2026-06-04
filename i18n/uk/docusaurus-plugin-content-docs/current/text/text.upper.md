---
title: Text.Upper
---

# Text.Upper


Перетворює всі символи на верхній регістр.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Повертає результат перетворення всіх символів параметра `text` на символи верхнього регістру. Крім того, можна вказати необов’язковий параметр `culture` (наприклад, "uk-UA").


## Examples

### Example #1
Отримати варіант "aBcD" у верхньому регістрі.
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
