---
title: Table.ReorderColumns
---

# Table.ReorderColumns


## Description

Retourneert een tabel met de kolommen in de opgegeven volgorde.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Details

Retourneert een tabel vanuit de invoer <code>table</code> met de kolom in de volgorde zoals bepaald door <code>columnOrder</code>. Kolommen die niet in de lijst zijn opgegeven, worden niet opnieuw gerangschikt.     Als de kolom niet bestaat, wordt er een uitzondering gegenereerd tenzij er door de optionele parameter <code>missingField</code> een alternatief wordt opgegeven (bijvoorbeeld <code>MissingField.UseNull</code> of <code>MissingField.Ignore</code>).


## Examples

### Example #1 
De volgorde van de kolommen [Phone] en [Name] in de tabel omdraaien.
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
De volgorde van de kolommen [Phone] en [Addresss] in de tabel omdraaien of MissingField.Ignore gebruiken. De tabel wordt niet gewijzigd, omdat de kolom [Address] niet bestaat.
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
