---
title: Record.Field
---

# Record.Field


## Description

Pateikiama nurodyto lauko reikšmė įraše.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Details

Pateikiama nurodyto <code>field</code>, esančio <code>record</code>, reikšmė. Jei laukas nerastas, pateikiama išimtis.


## Examples

### Example #1 
Raskite lauko „CustomerID“ reikšmę įraše.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
