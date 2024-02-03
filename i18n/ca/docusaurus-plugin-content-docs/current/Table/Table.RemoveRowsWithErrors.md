---
title: Table.RemoveRowsWithErrors
---

# Table.RemoveRowsWithErrors


## Description

Retorna la taula amb les files suprimides de la taula d&#39;entrada que contenen un error almenys en una de les cel·les. Si s&#39;especifica una llista de columnes, només s&#39;inspecciona si hi ha errors a les cel·les de les columnes especificades.


## Syntax

```powerquery
Table.RemoveRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

Retorna la taula amb les files suprimides de la taula d'entrada que contenen un error almenys en una de les cel·les. Si s'especifica una llista de columnes, només s'inspecciona si hi ha errors a les cel·les de les columnes especificades.


## Examples

### Example #1 
Suprimeix el valor erroni de la primera fila.
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
