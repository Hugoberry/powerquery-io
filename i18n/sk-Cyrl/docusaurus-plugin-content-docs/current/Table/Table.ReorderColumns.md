---
title: Table.ReorderColumns
---

# Table.ReorderColumns


## Description

Vráti tabuľku so stĺpcami v zadanom poradí.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Details

Vráti tabuľku zo vstupu <code>table</code>, pričom poradie stĺpcov určuje funkcia <code>columnOrder</code>. Pre stĺpce neurčené v zozname sa poradie nezmení.     Ak stĺpec neexistuje, dôjde k výnimke, pokiaľ voliteľný parameter <code>missingField</code> neurčuje alternatívu (napr. <code>MissingField.UseNull</code> alebo <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Zmeňte v tabuľke poradie stĺpcov [Phone] a [Name].
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
Zmeňte v tabuľke poradie stĺpcov [Phone] a [Address] alebo použite funkciu MissingField.Ignore. Tabuľka sa tým nezmení, pretože stĺpec [Address] neexistuje.
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
