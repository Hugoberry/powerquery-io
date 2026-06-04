---
title: Record.FromTable
---

# Record.FromTable


Crea un registre a partir d'una taula amb la forma \{\[Name = name, Value = value\]\}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

Retorna un registre a partir d'una taula de registres `table` que conté noms de camp i noms de valor `{[Name = name, Value = value]}`. Es produeix un error si els noms de camp no són únics.


## Examples

### Example #1
Crea un registre a partir de la taula amb el format Table.FromRecords(\{\[Name = "CustomerID", Value = 1\], \[Name = "Name", Value = "Bob"\], \[Name = "Phone", Value = "123-4567"\]\}).
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
