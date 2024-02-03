---
title: Table.ToRows
---

# Table.ToRows


## Description

Vytvoří z tabulky seznam vnořených seznamů hodnot řádků.


## Syntax

```powerquery
Table.ToRows(
    table as table
) as list
```


## Details

Vytvoří z tabulky <code>table</code> seznam vnořených seznamů.  Jednotlivé položky seznamu představují vnitřní seznam obsahující hodnoty řádků.


## Examples

### Example #1 
Vytvoří z tabulky seznam hodnot řádků.
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
