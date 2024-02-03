---
title: Table.DemoteHeaders
---

# Table.DemoteHeaders


## Description

Rebaixa el nivell de les capçaleres de columna a la primera fila dels valors.


## Syntax

```powerquery
Table.DemoteHeaders(
    table as table
) as table
```


## Details

Rebaixa el nivell de les capçaleres de columna (és a dir, noms de columna) a la primera fila dels valors. Els noms de columna per defecte són "Columna1", "Columna2", etc.


## Examples

### Example #1 
Rebaixa el nivell de la primera fila de valors de la taula.
```powerquery
Table.DemoteHeaders(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "CustomerID", Column2 = "Name", Column3 = "Phone"],
    [Column1 = 1, Column2 = "Bob", Column3 = "123-4567"],
    [Column1 = 2, Column2 = "Jim", Column3 = "987-6543"]
})
```




## Category
Table.Column operations
