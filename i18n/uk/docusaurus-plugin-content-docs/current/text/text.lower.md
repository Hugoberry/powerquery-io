---
title: Text.Lower
---

# Text.Lower


Перетворює регістр усіх символів на нижній.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Remarks

Повертає результат перетворення всіх символів параметра `text` на символи нижнього регістру. Крім того, можна вказати необов’язковий параметр `culture` (наприклад, "uk-UA").


## Examples

### Example #1
Отримати варіант "AbCd" у нижньому регістрі.
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
