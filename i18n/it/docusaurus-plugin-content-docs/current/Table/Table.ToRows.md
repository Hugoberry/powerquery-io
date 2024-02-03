---
title: Table.ToRows
---

# Table.ToRows


## Description

Crea un elenco di elenchi annidati di valori di riga da una tabella.


## Syntax

```powerquery
Table.ToRows(
    table as table
) as list
```


## Details

Crea un elenco di elenchi annidati dalla tabella <code>table</code>.  Ogni voce di elenco è un elenco interno contenente i valori di riga.


## Examples

### Example #1 
Creare un elenco dei valori di riga dalla tabella.
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
