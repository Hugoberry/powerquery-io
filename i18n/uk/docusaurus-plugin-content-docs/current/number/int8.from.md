---
title: Int8.From
---

# Int8.From


Створює 8-розрядне ціле число зі знаком із заданого значення.


## Syntax

```powerquery
Int8.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Повертає 8-розрядне ціле значення `number` зі знаком із заданого параметра `value`. Якщо заданий параметр `value` має значення `null`, функція `Int8.From` повертає `null`. Якщо заданий параметр `value` має значення `number` та перебуває в діапазоні 8-розрядних цілих чисел зі знаком без дробової частки, повертається `value`. Якщо наявна дробова частка, число округлюється за вказаним режимом. За замовчуванням використовується режим округлення `RoundingMode.ToEven`. Якщо `value` має будь-який інший тип, його спочатку буде перетворено на `number` за допомогою функції `Number.FromText`. Див. опис функції `Number.Round`, щоб дізнатися про доступні режими округлення. Крім того, можна вказати необов'язковий параметр `culture` (наприклад, "uk-UA").


## Examples

### Example #1
Отримати 8-розрядне ціле значення `number` зі знаком зі значення `"4"`.
```powerquery
Int8.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Отримати 8-розрядне ціле значення `number` зі знаком зі значення `"4.5"`, використовуючи режим округлення `RoundingMode.AwayFromZero`.
```powerquery
Int8.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
