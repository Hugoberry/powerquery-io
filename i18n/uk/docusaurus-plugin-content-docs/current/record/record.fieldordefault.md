---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


Повертає значення вказаного поля в записі або значення за замовчуванням, якщо поле не знайдено.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Remarks

Повертає значення вказаного поля `field` у записі `record`. Якщо поле не знайдено, повертається додаткове значення `defaultValue`.


## Examples

### Example #1
Знайти в записі значення поля "Phone" або повернути Null-значення, якщо його не існує.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2
Знайти в записі значення поля "Phone" або повернути значення за замовчуванням, якщо його не існує.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
