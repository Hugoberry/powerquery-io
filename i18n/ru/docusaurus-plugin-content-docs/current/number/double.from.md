---
title: Double.From
---

# Double.From


Создает число Double по заданному значению.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Возвращает значение `number` типа Double, полученное из предоставленного значения `value`. Если данное `value` равно `NULL`, то `Double.From` возвращает `NULL`. Если данное `value` представляет собой `number` в границах диапазона Double, то `value` и возвращается, а в противном случае возвращается ошибка. Если `value` имеет какой-либо другой тип, значение сначала преобразуется в `number` с помощью `Number.FromText`. При необходимости можно также указать `culture` (например, "ru-RU").


## Examples

### Example #1
Получить значение Double `number` для `"4"`.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
