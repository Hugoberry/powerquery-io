---
title: Table.SingleRow
---

# Table.SingleRow


Vráti jeden riadok v tabuľke.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Remarks

Vráti jeden riadok v jednoriadkovej tabuľke `table`. Ak má `table` viac ako jeden riadok, vyvolá sa chyba.


## Examples

### Example #1
Vráťte jeden riadok v tabuľke.
```powerquery
Table.SingleRow(Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}))
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Table.Row operations
