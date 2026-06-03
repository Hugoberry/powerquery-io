---
title: Percentage.From
---

# Percentage.From


Возвращает значение процента от заданного значения.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Возвращает значение `percentage`, полученное из предоставленного значения `value`. Если данное `value` равно `NULL`, то `Percentage.From` возвращает `NULL`. Если данное `value` представляет собой `text` с конечным символом процентов, то возвращается преобразованное десятичное значение. В противном случае значение преобразуется в `number` с помощью `Number.From`. При необходимости можно также указать `culture` (например, "ru-RU").


## Examples

### Example #1
Получапет значение `percentage` для `"12.3 %"`.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
