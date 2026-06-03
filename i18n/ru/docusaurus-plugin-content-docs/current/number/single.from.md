---
title: Single.From
---

# Single.From


Создает число Single со знаком по заданному значению.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Возвращает значение `number` типа Single, полученное из предоставленного значения `value`. Если данное `value` равно `NULL`, то `Single.From` возвращает `NULL`. Если данное `value` представляет собой `number` в границах диапазона Single, то `value` и возвращается, а в противном случае возвращается ошибка. Если `value` имеет какой-либо другой тип, значение сначала преобразуется в `number` с помощью `Number.FromText`. При необходимости можно также указать `culture` (например, "ru-RU").


## Examples

### Example #1
Получить значение Single `number` для `"1.5"`.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
