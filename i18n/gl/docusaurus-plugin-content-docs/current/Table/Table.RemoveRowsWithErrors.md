---
title: Table.RemoveRowsWithErrors
---

# Table.RemoveRowsWithErrors


## Description

Devolve unha táboa coas filas eliminadas da táboa de entrada que conteñen un erro en polo menos unha das celas. Especifícase unha lista de columnas, entón só se inspeccionan á busca de erros as celas nas columnas especificadas.


## Syntax

```powerquery
Table.RemoveRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

Devolve unha táboa coas filas eliminadas da táboa de entrada que conteñen un erro en polo menos unha das celas. Especifícase unha lista de columnas, entón só se inspeccionan á busca de erros as celas nas columnas especificadas.


## Examples

### Example #1 
Elimine un valor de erro da primeira fila.
```powerquery
Table.RemoveRowsWithErrors(
    Table.FromRecords({
        [Column1 = ...],
        [Column1 = 2],
        [Column1 = 3]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 2],
    [Column1 = 3]
})
```




## Category
Table.Row operations
