---
title: Table.SelectRowsWithErrors
---

# Table.SelectRowsWithErrors


## Description

Retorna la taula només amb aquelles files de la taula d&#39;entrada que contenen un error almenys en una de les cel·les. Si s&#39;especifica una llista de columnes, només s&#39;inspecciona si hi ha errors a les cel·les de les columnes especificades.


## Syntax

```powerquery
Table.SelectRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

Retorna la taula només amb aquelles files de la taula d'entrada que contenen un error almenys en una de les cel·les. Si s'especifica una llista de columnes, només s'inspecciona si hi ha errors a les cel·les de les columnes especificades.


## Examples

### Example #1 
Selecciona els noms dels clients que tenen errors a les seves files.
```powerquery
Table.SelectRowsWithErrors(
    Table.FromRecords({
        [CustomerID = ..., Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)[Name]
```

Result: 
```powerquery
{"Bob"}
```




## Category
Table.Row operations
