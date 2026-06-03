---
title: Int8.From
---

# Int8.From


Создает 8-разрядное целое число со знаком по заданному значению.


## Syntax

```powerquery
Int8.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Возвращает 8-разрядное целочисленное значение `number` со знаком, полученное из предоставленного значения `value`. Если данное `value` равно `NULL`, то `Int8.From` возвращает `NULL`. Если данное `value` представляет собой `number` в диапазоне 8-разрядных целых чисел со знаком и не имеет дробной части, то `value` и возвращается. При наличии дробной части число округляется в соответствии с указанным режимом. Режим округления по умолчанию — `RoundingMode.ToEven`. Если `value` имеет какой-либо другой тип, сначала выполняется преобразование в `number` с помощью `Number.FromText`. Доступные режимы округления см. в описании `Number.Round`. При необходимости можно также указать `culture` (например, "ru-RU").


## Examples

### Example #1
Получить 8-разрядное целое значение `number` со знаком для `"4"`.
```powerquery
Int8.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Получить 8-разрядное целое значение `number` со знаком для `"4.5"`, используя `RoundingMode.AwayFromZero`.
```powerquery
Int8.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
