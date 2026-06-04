---
title: Table.ReorderColumns
---

# Table.ReorderColumns


Vrne tabelo s stolpci v navedenem vrstnem redu.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Vrne tabelo iz vnosa `table` s stolpci v vrstnem redu, ki ga določa `columnOrder`. Stolpci, ki niso navedeni na seznamu, ne bodo razvrščeni. Če stolpec ne obstaja, pride do napake, razen če izbirni parameter `missingField` določa nadomestno vrednost (npr. `MissingField.UseNull` ali `MissingField.Ignore`).


## Examples

### Example #1
Zamenjajte vrstni red stolpcev \[Telefon\] in \[Ime\] v tabeli.
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
Zamenjajte vrstni red stolpcev \[Telefon\] in \[Naslov\] ali uporabite"MissingField.Ignore"v tabeli. Tabelo ne bo spremenjena, ker stolpec \[Naslov\] ne obstaja.
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
