---
title: Record.FromTable
---

# Record.FromTable


Vytvorí záznam z tabuľky vo formáte \{\[Name = name, Value = value\]\}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

Vráti záznam z tabuľky záznamov `table` obsahujúci názvy polí a názvy hodnôt `{[Name = name, Value = value]}`. Ak názvy polí nie sú jedinečné, vyvolá sa chyba.


## Examples

### Example #1
Vytvorte záznam z tabuľky vo formáte Table.FromRecords(\{\[Name = "CustomerID", Value = 1\], \[Name = "Name", Value = "Bob"\], \[Name = "Phone", Value = "123-4567"\]\}).
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
