---
title: Table.Group
---

# Table.Group


## Description

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


## Details

Agrupa les files de <code>table</code> per les columnes clau definides per <code>key</code>. L'element <code>key</code> pot ser un nom de columna únic o una llista de noms de columna.    Per a cada grup, es construeix un registre que conté les columnes clau (i els seus valors), així com algunes columnes agregades especificades per <code>aggregatedColumns</code>.    Opcionalment, <code>groupKind</code> i <code>comparer</code> també es poden especificar.<br />    <br />    Si les dades ja estan ordenades per les columnes clau, es pot proporcionar un element <code>groupKind</code> de GroupKind.Local. Això pot millorar el rendiment de l'agrupació en casos concrets,    ja que s'assumeix que totes les files amb un conjunt proporcionat de valors clau són contigües. <br />    <br />    En indicar un element <code>comparer</code>, tingueu en compte que, si tracta claus diferents com a iguals, és possible que es col·loqui una fila en un grup amb claus diferents.<br />    <br />    Aquesta funció no garanteix l'ordenació de les files que retorna.  


## Examples

### Example #1 
Agrupa la taula i afegeix una columna [total] agregada que conté la suma de preus (&#34;each List.Sum([price])&#34;).
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
