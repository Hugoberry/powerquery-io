---
title: Table.AlternateRows
---

# Table.AlternateRows


## Description

Conserva el desplazamiento inicial y entonces alterna entre tomar y saltar las siguientes filas.


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

Conserva el desplazamiento inicial y entonces alterna entre tomar y saltar las siguientes filas.    <ul>       <li><code>table</code>: la tabla de entrada.</li>       <li><code>offset</code>: el número de filas que desea conservar antes de iniciar las iteraciones.</li>       <li><code>skip</code>: el número de filas que desea quitar en cada iteración.</li>       <li><code>take</code>: el número de filas que desea conservar en cada iteración.</li>    </ul>    


## Examples

### Example #1 
Devolver una tabla de la tabla que, empezando en la primera fila, salta un valor y, a continuación, conserva otro valor.
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
