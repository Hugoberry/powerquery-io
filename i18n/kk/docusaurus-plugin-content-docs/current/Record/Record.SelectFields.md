---
title: Record.SelectFields
---

# Record.SelectFields


## Description

Тек көрсетілген өрістерді қамтитын жазбаны қайтарады.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

Кіріс <code>record</code> ішінен тек <code>fields</code> тізімінде көрсетілген өрістерді қамтитын жазбаны қайтарады.


## Examples

### Example #1 
Жазбадағы &#34;Item&#34; және &#34;Price&#34; өрістерін таңдау.
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
