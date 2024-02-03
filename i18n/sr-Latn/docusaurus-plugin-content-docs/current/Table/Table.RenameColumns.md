---
title: Table.RenameColumns
---

# Table.RenameColumns


## Description

Primenjuje preimenovanja u obliku \{old, new}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Details

Obavlja data preimenovanja kolona iz tabele <code>table</code>. Operacija zamene <code>renames</code> se sastoji od liste sa dve vrednosti, starog i novog imena kolone, navedenih u obliku liste.    Ako kolona ne postoji, vraća se izuzetak osim u slučaju da opcionalni parametar <code>missingField</code> navede alternativu (tj. <code>MissingField.UseNull</code> ili <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Zamena imena kolone „BrKupca“ imenom „IDKupca“ u tabeli.
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
Zamena imena kolone „BrKupca“ imenom IDkupca“ i imena „BrTelefona“ imenom „Telefon“ u tabeli.
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
Zamena imena kolone „NovaKol“ imenom „NovaKolona“ u tabeli i zanemarivanje ako kolona ne postoji.
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
