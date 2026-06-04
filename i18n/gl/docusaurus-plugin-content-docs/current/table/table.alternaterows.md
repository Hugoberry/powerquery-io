---
title: Table.AlternateRows
---

# Table.AlternateRows


Mantén o desprazamento inicial e logo alterna aceptando e ignorando as seguintes filas.


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

Mantén o desprazamento inicial e logo alterna aceptando e ignorando as seguintes filas.

-   `table`: a táboa de entrada.
-   `offset`: o número de filas que vai manter antes de comezar as iteracións.
-   `skip`: o número de filas que se van eliminar en cada iteración.
-   `take`: o número de filas que se van manter en cada iteración.


## Examples

### Example #1
Devolver unha táboa a partir da táboa que, comezando na primeira fila, ignora 1 valor e logo mantén 1 valor.
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
