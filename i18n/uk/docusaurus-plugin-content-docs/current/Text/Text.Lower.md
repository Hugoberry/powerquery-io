---
title: Text.Lower
---

# Text.Lower


## Description

Перетворює регістр усіх символів на нижній.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Details

Повертає результат перетворення всіх символів параметра <code>text</code> на символи нижнього регістру. Крім того, можна вказати необов’язковий параметр <code>culture</code> (наприклад, "uk-UA").


## Examples

### Example #1 
Отримати варіант &#34;AbCd&#34; у нижньому регістрі.
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
