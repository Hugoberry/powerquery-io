---
title: Table.RenameColumns
---

# Table.RenameColumns


## Description

Aplică redenumirile de forma \{old, new}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Details

Efectuează redenumirile date în coloanele din tabelul <code>table</code>. O operaţiune de înlocuire <code>renames</code> este alcătuită dintr-o listă de două valori, numele vechii coloane şi numele noii coloane furnizate într-o listă.    În cazul în care coloana nu există, apare o excepţie dacă parametrul opţional <code>missingField</code> nu specifică o alternativă (de ex., <code>MissingField.UseNull</code> sau <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Înlocuiți numele coloanei „NumClient” cu „IDClient” în tabel.
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
Înlocuiți numele coloanei „NumClient” cu „IDClient” și „NumTelefon” cu „Telefon” în tabel.
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
Înlocuiți numele coloanei „ColNouă” cu „ColoanăNouă” în tabel și ignorați dacă această coloană nu există.
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
