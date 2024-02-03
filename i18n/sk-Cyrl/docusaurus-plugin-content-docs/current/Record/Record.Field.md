---
title: Record.Field
---

# Record.Field


## Description

Vráti hodnotu zadaného poľa v zázname.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Details

Vráti hodnotu zadaného poľa <code>field</code> v zázname <code>record</code>. Ak sa pole nenájde, dôjde k výnimke.


## Examples

### Example #1 
Nájdite v zázname hodnotu poľa CustomerID.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
