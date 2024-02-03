---
title: Table.SingleRow
---

# Table.SingleRow


## Description

Pateikiama viena eilutė lentelėje.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Details

Pateikiama viena eilutė vienos eilutės <code>table</code>. Jei <code>table</code> yra daugiau nei viena eilutė, pateikiama išimtis.


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
