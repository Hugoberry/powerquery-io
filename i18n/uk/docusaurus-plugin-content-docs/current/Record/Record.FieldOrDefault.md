---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


## Description

Повертає значення вказаного поля в записі або значення за замовчуванням, якщо поле не знайдено.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Details

Повертає значення вказаного поля <code>field</code> у записі <code>record</code>. Якщо поле не знайдено, повертається додаткове значення <code>defaultValue</code>.


## Examples

### Example #1 
Знайти в записі значення поля &#34;Phone&#34; або повернути Null-значення, якщо його не існує.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2 
Знайти в записі значення поля &#34;Phone&#34; або повернути значення за замовчуванням, якщо його не існує.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
