---
title: Table.RenameColumns
---

# Table.RenameColumns


Aplică redenumirile de forma \{old, new\}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Efectuează redenumirile date în coloanele din tabelul `table`. O operațiune de înlocuire `renames` este alcătuită dintr-o listă de două valori, numele vechii coloane și numele noii coloane furnizate într-o listă. În cazul în care coloana nu există, se generează o eroare dacă parametrul opțional `missingField` nu specifică o alternativă (de ex., `MissingField.UseNull` sau `MissingField.Ignore`).


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
