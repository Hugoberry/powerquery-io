---
title: Record.RemoveFields
---

# Record.RemoveFields


Odstráni zadané polia zo vstupného záznamu.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Vráti záznam, ktorý odstráni všetky polia zadané v zozname `fields` zo vstupu `record`. Ak zadané pole neexistuje, vyvolá sa chyba.


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
