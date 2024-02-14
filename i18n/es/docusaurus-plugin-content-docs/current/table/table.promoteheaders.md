---
title: Table.PromoteHeaders
---

# Table.PromoteHeaders


Promueve la primera fila de valores a encabezados de las nuevas columnas (es decir, nombres de columna).


## Syntax

```powerquery
Table.PromoteHeaders(
    table as table,
    optional options as record
) as table
```


## Remarks

Promueve la primera fila de valores como encabezados de las nuevas columnas (es decir, nombres de columna). De manera predeterminada, solo los valores de texto o numéricos se promueven a encabezados. Opciones válidas:    <div>      <code>PromoteAllScalars</code>: si se define como <code>true</code>, todos los valores escalares de la primera fila se promueven a encabezados con el elemento <code>Culture</code>, si se especificó (o la configuración regional del documento actual).    En el caso de valores que no se pueden convertir en texto, se usará un nombre de columna predeterminado.    </div>    <div>    <code>Culture</code>: nombre de referencia cultural que especifica la referencia cultural de los datos.    </div>  


## Examples

### Example #1 
Promover la primera fila de valores de la tabla.
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
Promueve todos los valores escalares de la primera fila de la tabla a encabezados.
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
