---
title: Table.AlternateRows
---

# Table.AlternateRows


## Description

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


## Details

Mantén o desprazamento inicial e logo alterna aceptando e ignorando as seguintes filas.    <ul>       <li><code>table</code>: a táboa de entrada.</li>       <li><code>offset</code>: o número de filas que vai manter antes de comezar as iteracións.</li>       <li><code>skip</code>: o número de filas que se van eliminar en cada iteración.</li>       <li><code>take</code>: o número de filas que se van manter en cada iteración.</li>    </ul>    


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
