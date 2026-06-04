---
title: Table.PromoteHeaders
---

# Table.PromoteHeaders


Sube de nivel a primeira fila de valores como as novas cabeceiras de columna (p. ex., nomes de columna).


## Syntax

```powerquery
Table.PromoteHeaders(
    table as table,
    optional options as record
) as table
```


## Remarks

Promove a primeira fila de valores como as novas cabeceiras de columna (é dicir, os nomes das columnas). Por defecto, só os valores de texto ou numéricos se promoven ás cabeceiras. Opcións válidas:

-   `PromoteAllScalars`: Se se define como `true`, todos os valores escalares da primeira fila ascenden a cabeceiras usando a `Culture`, se se especifica (ou a configuración rexional do documento actual). Para os valores que non se poden converter en texto, usarase un nome de columna predeterminado.
-   `Cultura`: Un nome de cultura que especifica a cultura para os datos.


## Examples

### Example #1
Suba de nivel a primeira fila de valores da táboa.
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Column1 = "CustomerID", Column2 = "Name", Column3 = #date(1980, 1, 1)],
        [Column1 = 1, Column2 = "Bob", Column3 = #date(1980, 1, 1)]
    })
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Column3 = #date(1980, 1, 1)]})
```


### Example #2
Suba de nivel todos os escalares da primeira fila da táboa a cabeceiras.
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Rank = 1, Name = "Name", Date = #date(1980, 1, 1)],
        [Rank = 1, Name = "Bob", Date = #date(1980, 1, 1)]}
    ),
    [PromoteAllScalars = true, Culture = "en-US"]
)
```

Result: 
```powerquery
Table.FromRecords({[1 = 1, Name = "Bob", #"1/1/1980" = #date(1980, 1, 1)]})
```




## Category
Table.Column operations
