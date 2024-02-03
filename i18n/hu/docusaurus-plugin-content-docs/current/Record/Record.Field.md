---
title: Record.Field
---

# Record.Field


## Description

Egy rekord megadott mezőjének értékét adja vissza.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Details

A(z) <code>record</code> rekord megadott <code>field</code> mezőjének értékét adja vissza. Ha a mező nem található, a függvény kivételt vált ki.


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
