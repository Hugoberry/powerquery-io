---
title: Table.SingleRow
---

# Table.SingleRow


## Description

Vráti jeden riadok v tabuľke.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Details

Vráti jeden riadok v jednoriadkovej tabuľke <code>table</code>. Ak tabuľka <code>table</code> obsahuje viac ako jeden riadok, dôjde k výnimke.


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
