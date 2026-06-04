---
title: Double.From
---

# Double.From


Створює число подвійної точності із заданого значення.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Повертає значення `number` подвійної точності із заданого параметра `value`. Якщо заданий параметр `value` має значення `null`, функція `Double.From` повертає `null`. Якщо заданий параметр `value` має значення `number` та перебуває в діапазоні подвійної точності, повертається `value`. Інакше повертається помилка. Якщо параметр `value` має інший тип, його спочатку буде перетворено на значення `number` за допомогою функції `Number.FromText`. Крім того, можна вказати необов'язковий параметр `culture` (наприклад, "uk-UA").


## Examples

### Example #1
Отримати значення `number` подвійної точності зі значення `"4"`.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
