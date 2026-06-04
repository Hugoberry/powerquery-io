---
title: Decimal.From
---

# Decimal.From


Створює десяткове число із заданого значення.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Повертає значення `number` десяткової точності із заданого параметра `value`. Якщо заданий параметр `value` має значення `null`, функція `Decimal.From` повертає `null`. Якщо заданий параметр `value` має значення `number` та перебуває в діапазоні десяткової точності, повертається `value`. Інакше повертається помилка. Якщо параметр `value` має інший тип, його спочатку буде перетворено на значення `number` за допомогою функції `Number.FromText`. Крім того, можна вказати необов'язковий параметр `culture` (наприклад, "uk-UA").


## Examples

### Example #1
Отримати десяткове значення `number` зі значення `"4.5"`.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
