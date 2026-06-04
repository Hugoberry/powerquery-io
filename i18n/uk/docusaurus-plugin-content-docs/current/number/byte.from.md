---
title: Byte.From
---

# Byte.From


Створює 8-розрядне ціле число з указаного значення.


## Syntax

```powerquery
Byte.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Повертає 8-розрядне ціле значення `number` із заданого параметра `value`. Якщо заданий параметр `value` має значення `null`, функція `Byte.From` повертає `null`. Якщо заданий параметр `value` має значення `number` та перебуває в діапазоні 8-розрядних цілих чисел без дробової частки, повертається `value`. Якщо наявна дробова частка, число округлюється за вказаним режимом. За замовчуванням використовується режим округлення `RoundingMode.ToEven`. Якщо `value` має будь-який інший тип, його спочатку буде перетворено на `number` за допомогою функції `Number.FromText`. Див. опис функції `Number.Round`, щоб дізнатися про доступні режими округлення. Крім того, можна вказати необов'язковий параметр `culture` (наприклад, "uk-UA").


## Examples

### Example #1
Отримати 8-розрядне ціле значення `number` зі значення `"4"`.
```powerquery
Byte.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Отримати 8-розрядне ціле значення `number` зі значення `"4.5"`, використовуючи режим округлення `RoundingMode.AwayFromZero`.
```powerquery
Byte.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
