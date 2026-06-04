---
title: Table.SingleRow
---

# Table.SingleRow


Pateikiama viena eilutė lentelėje.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Remarks

Pateikiama viena eilutė vienos eilutės `table`. Jei `table` turi daugiau nei vieną eilutę, pateikiama klaida.


## Examples

### Example #1
Pateikite vieną eilutę lentelėje.
```powerquery
Table.SingleRow(Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}))
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Table.Row operations
