---
title: Record.FromTable
---

# Record.FromTable


## Description

Crea un registro a partir de una tabla con el formato \{[Name = name, Value = value]}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Details

Devuelve un registro a partir de una tabla de registros <code>table</code> que contienen nombres de campo y nombres de valor <code>\{[Name = name, Value = value]}</code>. Si los nombres de campo no son únicos, se inicia una excepción.


## Examples

### Example #1 
Crear un registro a partir de la tabla del formulario Table.FromRecords(\{[Name = &#34;CustomerID&#34;, Value = 1], [Name = &#34;Name&#34;, Value = &#34;Bob&#34;], [Name = &#34;Phone&#34;, Value = &#34;123-4567&#34;]}).
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
