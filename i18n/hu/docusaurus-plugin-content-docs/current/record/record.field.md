---
title: Record.Field
---

# Record.Field


Egy rekord megadott mezőjének értékét adja vissza.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Remarks

A(z) `field` rekord megadott `record` mezőjének értékét adja vissza. Ha a mező nem található, hibaüzenet jelenik meg.


## Examples

### Example #1
Megállapítja a rekordban levő CustomerID mező értékét.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
