---
title: Record.RemoveFields
---

# Record.RemoveFields


## Description

Odstráni zadané polia zo vstupného záznamu.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

Vráti záznam, ktorý odstráni všetky polia zadané v zozname <code>fields</code> zo vstupu <code>record</code>. Ak zadané pole neexistuje, dôjde k výnimke.


## Examples

### Example #1 
Odstráňte zo záznamu pole Price.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2 
Odstráňte zo záznamu polia Price a Item.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
