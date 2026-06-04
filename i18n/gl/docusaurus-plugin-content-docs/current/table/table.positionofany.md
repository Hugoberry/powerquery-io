---
title: Table.PositionOfAny
---

# Table.PositionOfAny


Devolve a posición ou as posicións de calquera das filas especificadas dentro da táboa.


## Syntax

```powerquery
Table.PositionOfAny(
    table as table,
    rows as list,
    optional occurrence as number,
    optional equationCriteria as any
) as any
```


## Remarks

Devolve a(s) posición(s) da(s) fila(s) desde o `table` da primeira aparición da lista de `rows` . Devolve -1 se non se atopa ningunha aparición.

-   `table` : A táboa de entrada.
-   `rows` : A lista de filas da táboa para atopar as posicións.
-   `occurrence` : *(Opcional)* Especifica que ocorrencias da fila devolver.
-   `equationCriteria` : *(Opcional)* Controla a comparación entre as filas da táboa.


## Examples

### Example #1
Buscar a posición da primeira ocorrencia de \[a = 2, b = 4\] ou \[a = 6, b = 8\] na táboa `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    }
)
```

Result: 
```powerquery
0
```


### Example #2
Buscar a posición de todas as ocorrencias de \[a = 2, b = 4\] ou \[a = 6, b = 8\] na táboa `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}`.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    },
    Occurrence.All
)
```

Result: 
```powerquery
{0, 1, 2}
```




## Category
Table.Membership
