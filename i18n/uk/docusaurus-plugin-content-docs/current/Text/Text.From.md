---
title: Text.From
---

# Text.From


## Description

Створює текстове значення із заданого значення.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Details

Повертає текстове представлення параметра <code>value</code>. Параметр <code>value</code> може мати значення <code>number</code>, <code>date</code>, <code>time</code>, <code>datetime</code>, <code>datetimezone</code>, <code>logical</code>, <code>duration</code> або <code>binary</code>.    Якщо задано Null-значення, функція <code>Text.From</code> повертає Null-значення. Крім того, можна вказати необов’язковий параметр <code>culture</code> (наприклад, "uk-UA").


## Examples

### Example #1 
Створити текстове значення з числа 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```




## Category
Text.Conversions from and to text
