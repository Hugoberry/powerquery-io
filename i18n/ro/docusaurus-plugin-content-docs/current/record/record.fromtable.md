---
title: Record.FromTable
---

# Record.FromTable


Creează o înregistrare dintr-un tabel de forma \{\[Name = name, Value = value\]\}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

Returnează o înregistrare dintr-un tabel de înregistrări `table` ce conține numele câmpurilor și numele valorilor `{[Name = name, Value = value]}`. Dacă numele câmpurilor nu sunt unice, se generează o eroare.


## Examples

### Example #1
Creați o înregistrare din tabelul de forma Table.FromRecords(\{\[Name = "CustomerID", Value = 1\], \[Name = "Name", Value = "Bob"\], \[Name = "Phone", Value = "123-4567"\]\}).
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
