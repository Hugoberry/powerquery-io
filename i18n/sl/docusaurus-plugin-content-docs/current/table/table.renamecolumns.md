---
title: Table.RenameColumns
---

# Table.RenameColumns


Uporabi preimenovanja v obliki \{old, new\}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Preimenuje stolpce v tabeli `table`, kot je navedeno. Postopek zamenjave `renames` je sestavljen iz seznama dveh vrednosti – starega imena stolpca in novega imena stolpca, ki sta podana na seznamu. Če stolpec ne obstaja, pride do napake, razen če izbirni parameter `missingField` določa nadomestno vrednost (npr. `MissingField.UseNull` ali `MissingField.Ignore`).


## Examples

### Example #1
Zamenjajte ime stolpca"ŠtStranke"z imenom"IDStranke"v tabeli.
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
Zamenjajte ime stolpca"ŠtStranke"z imenom"IDStranke"in"TelefonskaŠt"z"Telefon"v tabeli.
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
Zamenjajte ime stolpca"NovStol"z imenom"NovStolpec"v tabeli in prezrite, če stolpec ne obstaja.
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
