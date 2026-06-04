---
title: Table.RenameColumns
---

# Table.RenameColumns


Taikomas (-i) formos \{old, new\} pervardijimas (-ai).


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Atliekami nurodyti lentelės `table` stulpelių pervardijimai. Pakeitimo operaciją `renames` sudaro dviejų reikšmių – senojo stulpelio pavadinimo ir naujojo stulpelio pavadinimo – sąrašas. Jei stulpelio nėra, pateikiama klaida, jei pasirenkamas parametras `missingField` nenurodo alternatyvos (pvz., `MissingField.UseNull` arba `MissingField.Ignore`).


## Examples

### Example #1
Pakeiskite stulpelio pavadinimą „CustomerNum“ į „CustomerID“ lentelėje.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerNum", "CustomerID"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2
Pakeiskite stulpelio pavadinimą „CustomerNum“ į „CustomerID“ ir „PhoneNum“ į „Phone“ lentelėje.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", PhoneNum = "123-4567"]}),
    {
        {"CustomerNum", "CustomerID"},
        {"PhoneNum", "Phone"}
    }
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #3
Pakeiskite stulpelio pavadinimą „NewCol“ į „NewColumn“ lentelėje ir nepaisykite, jei stulpelio nėra.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"NewCol", "NewColumn"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
