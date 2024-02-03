---
title: Record.ReorderFields
---

# Record.ReorderFields


## Description

Көрсетілген өрістердің ретін жаңа ретке өзгертеді.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Details

<code>record</code> ішіндегі өрістердің ретін <code>fieldOrder</code> тізімінде көрсетілген өрістер ретіндегідей өзгерткенен кейін жазбаны қайтарады. Өріс мәндері сақталады және <code>fieldOrder</code> ішінде тізілмеген өрістер бастапқы орнында қалдырылады.


## Examples

### Example #1 
Жазбадағы кейбір өрістердің ретін өзгерту.
```powerquery
Record.ReorderFields(
    [CustomerID = 1, OrderID = 1, Item = "Fishing rod", Price = 100.0],
    {"OrderID", "CustomerID"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```




## Category
Record.Transformations
