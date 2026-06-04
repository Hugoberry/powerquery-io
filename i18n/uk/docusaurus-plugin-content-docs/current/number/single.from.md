---
title: Single.From
---

# Single.From


Створює значення типу одинарної точності із заданого значення.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Повертає одиничне значення `number` із заданого параметра `value`. Якщо заданий параметр `value` має значення `null`, функція `Single.From` повертає `null`. Якщо заданий параметр `value` має значення `number` та перебуває в діапазоні одиничної точності, повертається `value`. Інакше повертається помилка. Якщо параметр `value` має інший тип, його спочатку буде перетворено на значення `number` за допомогою функції `Number.FromText`. Крім того, можна вказати необов'язковий параметр `culture` (наприклад, "uk-UA").


## Examples

### Example #1
Отримати значення `number` одинарної точності зі значення `"1.5"`.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
