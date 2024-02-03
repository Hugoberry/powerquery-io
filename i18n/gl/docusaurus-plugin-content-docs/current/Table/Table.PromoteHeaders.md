---
title: Table.PromoteHeaders
---

# Table.PromoteHeaders


## Description

Sube de nivel a primeira fila de valores como as novas cabeceiras de columna (p. ex., nomes de columna).


## Syntax

```powerquery
Table.PromoteHeaders(
    table as table,
    optional options as record
) as table
```


## Details

Sube de nivel a primeira fila de valores como as novas cabeceiras de columna (p. ex., nomes de columna). Por defecto, só os valores de texto ou de número súbense de nivel ás cabeceiras. Opcións válidas:    <div>      <code>PromoteAllScalars</code>: se se configura en <code>true</code>, todos os valores escalares da primeira fila sobense de nivel ás cabeceiras con <code>Culture</code>, se se especifica (ou a configuración rexional do documento actual).    No caso dos valores que non se poden converter en texto, usarase un nome de columna predefinido.    </div>    <div>    <code>Culture</code>: un nome de cultura que especifica a cultura dos datos.    </div>  


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
