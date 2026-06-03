---
title: Decimal.From
---

# Decimal.From


Создает число Decimal по заданному значению.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Возвращает значение `number` типа Decimal, полученное из предоставленного значения `value`. Если данное `value` равно `NULL`, то `Decimal.From` возвращает `NULL`. Если данное `value` представляет собой `number` в границах диапазона Decimal, то `value` и возвращается, а в противном случае возвращается ошибка. Если `value` имеет какой-либо другой тип, значение сначала преобразуется в `number` с помощью `Number.FromText`. При необходимости можно также указать `culture` (например, "ru-RU").


## Examples

### Example #1
Получить значение Decimal `number` для `"4.5"`.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
