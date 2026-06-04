---
title: Record.FromTable
---

# Record.FromTable


Sukuriamas įrašas iš lentelės, kurios forma \{\[Name = name, Value = value\]\}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

Pateikiamas įrašas iš įrašų lentelės `table` su laukų ir reikšmių pavadinimais `{[Name = name, Value = value]}`. Jei laukų pavadinimai nėra unikalūs, pateikiama klaida.


## Examples

### Example #1
Sukurkite įrašą iš lentelės, kurios forma Table.FromRecords(\{\[Name = "CustomerID", Value = 1\], \[Name = "Name", Value = "Bob"\], \[Name = "Phone", Value = "123-4567"\]\}).
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
