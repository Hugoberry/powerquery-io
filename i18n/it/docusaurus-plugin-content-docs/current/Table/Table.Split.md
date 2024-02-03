---
title: Table.Split
---

# Table.Split


## Description

Divide la tabella specificata in un elenco di tabelle usando le dimensioni di pagina specificate.


## Syntax

```powerquery
Table.Split(
    table as table,
    pageSize as number
) as list
```


## Details

Divide <code>table</code> in un elenco di tabelle in cui il primo elemento dell'elenco è una tabella contenente le prime <code>pageSize</code> righe dalla  tabella di origine, l'elemento successivo dell'elenco è un tabella contenente le successive <code>pageSize</code> righe della tabella di origine e così via.


## Examples

### Example #1 
Divide una tabella di cinque record in tabelle contenenti ognuna due record.
```powerquery
let
    Customers = Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Cristina", Phone = "232-1550"],
        [CustomerID = 5, Name = "Anita", Phone = "530-1459"]
    })
in
    Table.Split(Customers, 2)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    }),
    Table.FromRecords({
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Cristina", Phone = "232-1550"]
    }),
    Table.FromRecords({
        [CustomerID = 5, Name = "Anita", Phone = "530-1459"]
    })
}
```




## Category
Table.Transformation
