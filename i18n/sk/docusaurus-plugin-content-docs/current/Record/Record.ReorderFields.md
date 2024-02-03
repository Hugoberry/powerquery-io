---
title: Record.ReorderFields
---

# Record.ReorderFields


## Description

Zmeňte poradie zadaných polí na nové poradie.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Vráti záznam po zmene poradia polí vo vstupe <code>record</code> na poradie polí zadané v zozname <code>fieldOrder</code>. Zachovajú sa hodnoty polí a polia neuvedené v zozname <code>fieldOrder</code> sa ponechajú v pôvodných pozíciách.


## Examples

### Example #1 
Zmeňte poradie polí v zázname.
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
