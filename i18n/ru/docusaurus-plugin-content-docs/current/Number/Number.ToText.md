---
title: Number.ToText
---

# Number.ToText


Преобразует заданное число в текст.


## Syntax

```powerquery
Number.ToText(
    number as number,
    optional format as text,
    optional culture as text
) as text
```


## Remarks

Преобразует числовое значение <code>number</code> в текстовое значение в соответствии с форматом, указанным <code>format</code>.<br />    <br />    Формат — это текстовое значение, указывающее, как следует преобразовать число. Дополнительные сведения о поддерживаемых значениях формата см. на страницах https://go.microsoft.com/fwlink/?linkid=2241210 и https://go.microsoft.com/fwlink/?linkid=2240884.<br />    <br />    Также можно указать необязательный параметр <code>culture</code> (например, "ru-RU"), чтобы управлять поведением <code>format</code>.


## Examples

### Example #1 
Преобразование числа в текст без указания формата.
```powerquery
Number.ToText(4)
```

Result: 
```powerquery
"4"
```


### Example #2 
Преобразование числа в экспоненциальный формат.
```powerquery
Number.ToText(4, "e")
```

Result: 
```powerquery
"4.000000e+000"
```


### Example #3 
Преобразование числа в процентный формат с одним десятичным разрядом.
```powerquery
Number.ToText(-0.1234, "P1")
```

Result: 
```powerquery
"-12.3 %"
```




## Category
Number.Conversion and formatting
