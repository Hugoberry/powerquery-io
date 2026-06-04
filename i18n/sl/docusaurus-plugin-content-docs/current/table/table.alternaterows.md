---
title: Table.AlternateRows
---

# Table.AlternateRows


Ohrani začetni odmik, nato pa izmenično jemlje in preskakuje naslednje vrstice.


## Syntax

```powerquery
Table.AlternateRows(
    table as table,
    offset as number,
    skip as number,
    take as number
) as table
```


## Remarks

Ohrani začetni odmik, nato pa izmenično jemlje in preskakuje naslednje vrstice.

-   `table`: vhodna tabela.
-   `offset`: število vrstic, ki bodo ohranjene pred začetkom ponovitev.
-   `skip`: število vrstic, ki bodo odstranjene v vsaki ponovitvi.
-   `take`: število vrstic, ki bodo ohranjene v vsaki ponovitvi.


## Examples

### Example #1
Vrnite tabelo iz tabele, ki z začetkom v prvi vrstici preskoči 1 vrednost in nato obdrži 1 vrednost.
```powerquery
Table.AlternateRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    1,
    1,
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```




## Category
Table.Row operations
