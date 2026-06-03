---
title: Table.ReorderColumns
---

# Table.ReorderColumns


Retourneert een tabel met de kolommen in de opgegeven volgorde.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Retourneert een tabel vanuit de invoer `table` met de kolom in de volgorde zoals bepaald door `columnOrder`. Kolommen die niet in de lijst zijn opgegeven, worden niet opnieuw gerangschikt. Als de kolom niet bestaat wordt er een fout gegenereerd, tenzij de optionele parameter `missingField` een alternatief opgeeft (bijvoorbeeld `MissingField.UseNull` of `MissingField.Ignore`).


## Examples

### Example #1
De volgorde van de kolommen \[Phone\] en \[Name\] in de tabel omdraaien.
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
De volgorde van de kolommen \[Phone\] en \[Addresss\] in de tabel omdraaien of MissingField.Ignore gebruiken. De tabel wordt niet gewijzigd, omdat de kolom \[Address\] niet bestaat.
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
