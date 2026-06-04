---
title: Record.RemoveFields
---

# Record.RemoveFields


Көрсетілген өрістерді кіріс жазбадан жояды.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

`fields` тізімінде көрсетілген барлық өрістерді кіріс `record` ішінен жоятын жазбаны қайтарады. Егер көрсетілген өріс жоқ болса, қате туады.


## Examples

### Example #1
Жазбадан "Price" өрісін жою.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2
Жазбадан "Price" және "Item" өрістерін жою.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
