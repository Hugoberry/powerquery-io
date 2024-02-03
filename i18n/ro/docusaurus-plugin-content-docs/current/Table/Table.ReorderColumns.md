---
title: Table.ReorderColumns
---

# Table.ReorderColumns


## Description

Returnează un tabel cu coloane în ordinea specificată.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Details

Returnează un tabel din datele introduse <code>table</code>, cu coloanele în ordinea specificată de <code>columnOrder</code>. Coloanele care nu sunt specificate în listă nu vor fi reordonate.     În cazul în care coloana nu există, apare o excepţie dacă parametrul opţional <code>missingField</code> nu specifică o alternativă (de ex., <code>MissingField.UseNull</code> sau <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Comutați ordinea coloanelor [Telefon] și [Nume] din tabel.
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
Comutați ordinea coloanelor [Telefon] și [Adresă] sau utilizați „MissingField.Ignore” în tabel. Nu modifică tabelul, deoarece coloana [Adresă] nu există.
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
