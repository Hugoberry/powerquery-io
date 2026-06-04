---
title: Record.FromTable
---

# Record.FromTable


Crea un rexistro dunha táboa do formato \{\[Name = name, Value = value\]\}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

Devolve un rexistro dunha táboa de rexistros `table` que contén nomes de campo e nomes de valores `{[Name = name, Value = value]}`. Se os nomes de campo non son únicos, xérase un erro.


## Examples

### Example #1
Crear un rexistro dunha táboa do formato Table.FromRecords(\{\[Name = "CustomerID", Value = 1\], \[Name = "Name", Value = "Bob"\], \[Name = "Phone", Value = "123-4567"\]\}).
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
