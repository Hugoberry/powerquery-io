---
title: Table.ReorderColumns
---

# Table.ReorderColumns


Pateikiama lentelė su stulpeliais nurodyta tvarka.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Pateikiama lentelė iš išvesties `table` su stulpeliais `columnOrder` nurodyta tvarka. Stulpeliai, kurie nenurodyti sąraše, nebus pertvarkomi. Jei stulpelio nėra, pateikiama klaida, jei pasirenkamas parametras `missingField` nenurodo alternatyvos (pvz., `MissingField.UseNull` arba `MissingField.Ignore`).


## Examples

### Example #1
Pakeiskite \[Phone\] ir \[Name\] stulpelių tvarką lentelėje.
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Phone = "123-4567", Name = "Bob"]}),
    {"Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2
Pakeiskite \[Phone\] ir \[Address\] stulpelių tvarką arba naudokite „MissingField.Ignore“ lentelėje. Tai nepakeičia lentelės, nes stulpelio \[Address\] nėra.
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"Phone", "Address"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
