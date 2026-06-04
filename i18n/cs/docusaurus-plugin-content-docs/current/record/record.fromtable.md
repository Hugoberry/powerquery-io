---
title: Record.FromTable
---

# Record.FromTable


Vytvoří z tabulky záznam ve formátu \{\[Name = name, Value = value\]\}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

Vrátí záznam z tabulky záznamů `table` obsahující názvy polí a názvy hodnot `{[Name = name, Value = value]}`. Pokud názvy polí nejsou jedinečné, vyvolá se chyba.


## Examples

### Example #1
Vytvoří z tabulky záznam ve formátu Table.FromRecords(\{\[Name = "CustomerID", Value = 1\], \[Name = "Name", Value = "Bob"\], \[Name = "Phone", Value = "123-4567"\]\}).
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
