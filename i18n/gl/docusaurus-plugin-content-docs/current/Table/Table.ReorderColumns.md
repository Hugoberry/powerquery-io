---
title: Table.ReorderColumns
---

# Table.ReorderColumns


## Description

Devolve unha táboa coas columnas na orde especificada.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Details

Devolve unha táboa da <code>table</code> de entrada, coas columnas na orde especificada por <code>columnOrder</code>. As columnas que non se especifiquen na lista non se reordenarán.     Se a columna non existe, xérase unha excepción a non ser que o parámetro opcional <code>missingField</code> especifique unha alternativa (por exemplo, <code>MissingField.UseNull</code> ou <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Mudar a orde das columnas [Phone] e [Name] na táboa.
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Phone = "123-4567", Name = "Bob"]}),
    {"Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2 
Mudar a orde das columnas [Phone] e [Address] ou utilizar &#34;MissingField.Ignore&#34; na táboa. Non modifica a táboa debido a que a columna [Address] non existe.
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"Phone", "Address"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
