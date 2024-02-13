---
title: Table.Split
---

# Table.Split


Dzieli określoną tabelę na listę tabel przy użyciu określonego rozmiaru strony.


## Syntax

```powerquery
Table.Split(
    table as table,
    pageSize as number
) as list
```


## Remarks

Dzieli tabelę <code>table</code> na listę tabel, w której pierwszy element listy jest tabelą zawierającą pierwsze <code>pageSize</code> wiersze(-y) z    tabeli źródłowej, następny element listy to tabela zwierającą kolejne <code>pageSize</code>wiersze(-y) z tabeli źródłowej itd.


## Examples

### Example #1 
Podziel tabelę z pięcioma rekordami na tabele z dwoma rekordami w każdej.
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
