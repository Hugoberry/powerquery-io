---
title: Table.PositionOf
---

# Table.PositionOf


Devolve a posición ou as posicións da fila dentro da táboa.


## Syntax

```powerquery
Table.PositionOf(
    table as table,
    row as record,
    optional occurrence as any,
    optional equationCriteria as any
) as any
```


## Remarks

Devolve a posición na fila da primeira aparición do `row` no `table` especificado. Devolve -1 se non se atopa ningunha aparición.

-   `table` : A táboa de entrada.
-   `row` : A fila da táboa para atopar a posición.
-   `occurrence` : *(Opcional)* Especifica que ocorrencias da fila devolver.
-   `equationCriteria` : *(Opcional)* Controla a comparación entre as filas da táboa.


## Examples

### Example #1
Buscar a posición da primeira ocorrencia de \[a = 2, b = 4\] na táboa `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4]
)
```

Result: 
```powerquery
0
```


### Example #2
Buscar a posición da segunda ocorrencia de \[a = 2, b = 4\] na táboa `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    1
)
```

Result: 
```powerquery
2
```


### Example #3
Buscar a posición de todas as ocorrencias de \[a = 2, b = 4\] na táboa `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    Occurrence.All
)
```

Result: 
```powerquery
{0, 2}
```




## Category
Table.Membership
