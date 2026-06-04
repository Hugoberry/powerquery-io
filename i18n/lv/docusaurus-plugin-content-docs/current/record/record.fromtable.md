---
title: Record.FromTable
---

# Record.FromTable


Tiek izveidots ieraksts no šāda formāta tabulas: \{\[Name = name, Value = value\]\}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

Tiek atgriezts ieraksts, kas ir izveidots no ierakstu tabulas `table`, kurā ir ietverti lauku nosaukumi un vērtības `{[Name = name, Value = value]}`. Ja lauku nosaukumi nav unikāli, rodas kļūda.


## Examples

### Example #1
Izveidojiet ierakstu no šāda formāta tabulas: Table.FromRecords(\{\[Name = "CustomerID", Value = 1\], \[Name = "Name", Value = "Bob"\], \[Name = "Phone", Value = "123-4567"\]\}).
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
