---
title: Table.SingleRow
---

# Table.SingleRow


## Description

Retourne une seule ligne dans la table.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Details

Retourne une seule ligne dans le <code>table</code> avec une ligne unique. Si <code>table</code> a plus d'une ligne, une exception est levée.


## Examples

### Example #1 
Retourne la ligne de la table.
```powerquery
Table.SingleRow(Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}))
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Table.Row operations
