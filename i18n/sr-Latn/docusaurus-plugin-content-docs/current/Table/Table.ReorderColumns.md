---
title: Table.ReorderColumns
---

# Table.ReorderColumns


## Description

Vraća tabelu sa kolonama u navedenom redosledu.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Details

Prikazuje tabelu iz unosa <code>table</code>, sa kolonama u redosledu koji navodi <code>columnOrder</code>. Kolone koje nisu navedene na listi neće biti preuređene.     Ako kolona ne postoji, vraća se izuzetak osim u slučaju da opcionalni parametar <code>missingField</code> navede alternativu (tj. <code>MissingField.UseNull</code> ili <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Zamena redosleda kolona [Telefon] i [Ime] u tabeli.
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
Zamena redosleda kolona [Telefon] i [Adresa] ili upotreba vrednosti „MissingField.Ignore“ u tabeli. Tabela se ne menja jer kolona [Adresa] ne postoji.
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
