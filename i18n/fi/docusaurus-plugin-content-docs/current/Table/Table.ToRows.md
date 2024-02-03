---
title: Table.ToRows
---

# Table.ToRows


## Description

Luo luettelon sisäkkäisiä luetteloita taulukon riviarvoista.


## Syntax

```powerquery
Table.ToRows(
    table as table
) as list
```


## Details

Luo luettelon sisäkkäisiä luetteloita taulukosta <code>table</code>.  Kukin luettelokohde on sisempi luettelo, joka sisältää riviarvot.


## Examples

### Example #1 
Luo riviarvojen luettelo taulukosta.
```powerquery
Table.ToRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
}
```




## Category
Table.Conversions
