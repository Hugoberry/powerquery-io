---
title: Table.ToColumns
---

# Table.ToColumns


## Description

Luo luettelon sisäkkäisiä luetteloita taulukon sarakearvoista.


## Syntax

```powerquery
Table.ToColumns(
    table as table
) as list
```


## Details

Luo luettelon sisäkkäisiä luetteloita taulukosta <code>table</code>.  Kukin luettelokohde on sisempi luettelo, joka sisältää sarakearvot.


## Examples

### Example #1 
Luo sarakearvojen luettelo taulukosta.
```powerquery
Table.ToColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    })
)
```

Result: 
```powerquery
{{1, 2}, {"Bob", "Jim"}, {"123-4567", "987-6543"}}
```




## Category
Table.Conversions
