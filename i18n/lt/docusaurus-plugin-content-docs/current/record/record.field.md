---
title: Record.Field
---

# Record.Field


Pateikiama nurodyto lauko reikšmė įraše.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Remarks

Pateikiama nurodyto `field`, esančio `record`, reikšmė. Jei laukas nerandamas, pateikiama klaida.


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
