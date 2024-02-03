---
title: Record.SelectFields
---

# Record.SelectFields


## Description

Повертає запис, який містить тільки вказані поля.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

Повертає запис, який включає тільки поля, вказані у списку <code>fields</code>, із вхідного запису <code>record</code>.


## Examples

### Example #1 
Вибрати поля &#34;Item&#34; і &#34;Price&#34; у записі.
```powerquery
Record.SelectFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0],
    {"Item", "Price"}
)
```

Result: 
```powerquery
[Item = "Fishing rod", Price = 100]
```




## Category
Record.Selection
