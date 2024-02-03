---
title: Table.Split
---

# Table.Split


## Description

Scindează tabelul specificat într-o listă de tabele, utilizând dimensiunea de pagină specificată.


## Syntax

```powerquery
Table.Split(
    table as table,
    pageSize as number
) as list
```


## Details

Scindează <code>table</code> într-o listă de tabele în care primul element al listei este un tabel care conține primele <code>pageSize</code> rânduri din    tabelul sursă, următorul element al listei este un tabel care conține următoarele <code>pageSize</code> rânduri din tabelul sursă și așa mai departe.


## Examples

### Example #1 
Scindează un tabel de cinci înregistrări în tabele cu câte două înregistrări fiecare.
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
