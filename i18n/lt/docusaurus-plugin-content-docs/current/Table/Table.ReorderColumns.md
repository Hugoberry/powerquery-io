---
title: Table.ReorderColumns
---

# Table.ReorderColumns


## Description

Pateikiama lentelė su stulpeliais nurodyta tvarka.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Details

Pateikiama lentelė iš išvesties <code>table</code> su stulpeliais <code>columnOrder</code> nurodyta tvarka. Stulpeliai, kurie nenurodyti sąraše, nebus pertvarkomi.     Jei stulpelio nėra, pateikiama išimtis, jei pasirenkamas parametras <code>missingField</code> nenurodo alternatyvos (pvz., <code>MissingField.UseNull</code> arba <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Pakeiskite [Phone] ir [Name] stulpelių tvarką lentelėje.
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
Pakeiskite [Phone] ir [Address] stulpelių tvarką arba naudokite „MissingField.Ignore“ lentelėje. Tai nepakeičia lentelės, nes stulpelio [Address] nėra.
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
