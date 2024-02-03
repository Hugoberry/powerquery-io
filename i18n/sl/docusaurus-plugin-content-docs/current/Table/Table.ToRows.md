---
title: Table.ToRows
---

# Table.ToRows


## Description

Ustvari seznam ugnezdenih seznamov vrednosti vrstic iz tabele.


## Syntax

```powerquery
Table.ToRows(
    table as table
) as list
```


## Details

Ustvari seznam ugnezdenih seznamov iz tabele, <code>table</code>.  Vsak element seznama je notranji seznam, ki vsebuje vrednosti vrstic.


## Examples

### Example #1 
Ustvarite seznam z vrednostmi vrstic iz tabele.
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
