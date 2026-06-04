---
title: Table.Group
---

# Table.Group


Agrupa les files de la taula que tenen la mateixa clau.


## Syntax

```powerquery
Table.Group(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional groupKind as GroupKind.Type,
    optional comparer as function
) as table
```


## Remarks

Agrupa les files de `table` per les columnes clau definides per `key`. L'element `key` pot ser un nom de columna únic o una llista de noms de columna. Per a cada grup, es construeix un registre que conté les columnes clau (i els seus valors), així com algunes columnes agregades especificades per `aggregatedColumns`. Opcionalment, `groupKind` i `comparer` també es poden especificar.  
  
Si les dades ja estan ordenades per les columnes clau, es pot proporcionar un element `groupKind` de GroupKind.Local. Això pot millorar el rendiment de l'agrupació en casos concrets, ja que s'assumeix que totes les files amb un conjunt proporcionat de valors clau són contigües.  
  
En indicar un element `comparer`, tingueu en compte que, si tracta claus diferents com a iguals, és possible que es col·loqui una fila en un grup amb claus diferents.  
  
Aquesta funció no garanteix l'ordenació de les files que retorna.


## Examples

### Example #1
Agrupa la taula i afegeix una columna \[total\] agregada que conté la suma de preus ("each List.Sum(\[price\])").
```powerquery
Table.Group(
    Table.FromRecords({
        [CustomerID = 1, price = 20],
        [CustomerID = 2, price = 10],
        [CustomerID = 2, price = 20],
        [CustomerID = 1, price = 10],
        [CustomerID = 3, price = 20],
        [CustomerID = 3, price = 5]
    }),
    "CustomerID",
    {"total", each List.Sum([price])}
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [CustomerID = 1, total = 30],
        [CustomerID = 2, total = 30],
        [CustomerID = 3, total = 25]
    },
    {"CustomerID", "total"}
)
```




## Category
Table.Transformation
