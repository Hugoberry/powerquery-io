---
title: Record.FromTable
---

# Record.FromTable


Crea un registro a partir de una tabla con el formato \{\[Name = name, Value = value\]\}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

Devuelve un registro a partir de una tabla de registros `table` que contienen nombres de campo y nombres de valor `{[Name = name, Value = value]}`. Se produce un error si los nombres de campo no son únicos.


## Examples

### Example #1
Crear un registro a partir de la tabla del formulario Table.FromRecords(\{\[Name = "CustomerID", Value = 1\], \[Name = "Name", Value = "Bob"\], \[Name = "Phone", Value = "123-4567"\]\}).
```powerquery
Record.FromTable(
    Table.FromRecords({
        [Name = "CustomerID", Value = 1],
        [Name = "Name", Value = "Bob"],
        [Name = "Phone", Value = "123-4567"]
    })
)
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
