---
title: Record.RemoveFields
---

# Record.RemoveFields


## Description

Tar bort det eller de angivna fälten från indataposten.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

Returnerar en post som tar bort alla fält som anges i listan <code>fields</code> från indataposten <code>record</code>. Om det angivna fältet inte finns genereras ett undantag.


## Examples

### Example #1 
Ta bort fältet Price från posten.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2 
Ta bort fälten Price och Item från posten.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
