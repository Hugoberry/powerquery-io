---
title: Record.FieldNames
---

# Record.FieldNames


Өрістердің атауларын қайтарады.


## Syntax

```powerquery
Record.FieldNames(
    record as record
) as list
```


## Remarks

`record` жазбасындағы өрістердің атауларын мәтін түрінде қайтарады.


## Examples

### Example #1
Жазбадағы өрістердің атауларын анықтау.
```powerquery
Record.FieldNames([OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0])
```

Result: 
```powerquery
{"OrderID", "CustomerID", "Item", "Price"}
```




## Category
Record.Selection
