---
title: Percentage.From
---

# Percentage.From


Повертає значення відсотка від заданого значення.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Повертає значення `percentage` із заданого параметра `value`. Якщо заданий параметр `value` має значення `null`, функція `Percentage.From` повертає `null`. Якщо заданий параметр `value` має значення `text` зі знаком відсотка в кінці, повертається перетворене десяткове число. Інакше значення буде перетворено на `number` за допомогою функції `Number.From`. Крім того, можна вказати необов’язковий параметр `culture` (наприклад, "uk-UA").


## Examples

### Example #1
Отримати значення типу `percentage` зі значення `"12,3%"`.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
