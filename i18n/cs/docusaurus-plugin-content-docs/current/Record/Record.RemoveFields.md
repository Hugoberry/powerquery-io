---
title: Record.RemoveFields
---

# Record.RemoveFields


## Description

Odebere zadaná pole ze vstupního záznamu.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

Vrátí záznam, který odebere všechna pole určená v seznamu <code>fields</code> ze vstupu <code>record</code>. Pokud zadané pole neexistuje, vrhne výjimku.


## Examples

### Example #1 
Odebere pole Price ze záznamu.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2 
Odebere pole Price a Item ze záznamu.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
