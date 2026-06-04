---
title: Table.AlternateRows
---

# Table.AlternateRows


Manté el desplaçament inicial i després alterna prenent i ometent les files següents.


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

Manté el desplaçament inicial i després alterna prenent i ometent les files següents.

-   `table`: la taula d'entrada.
-   `offset`: el nombre de files que s'han de conservar abans d'iniciar les iteracions.
-   `skip`: el nombre de files que s'han de suprimir en cada iteració.
-   `take`: el nombre de files que s'han de conservar en cada iteració.


## Examples

### Example #1
Retorna una taula a partir de la taula que, començant per la primera fila, omet 1 valor i després conserva 1 valor.
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
