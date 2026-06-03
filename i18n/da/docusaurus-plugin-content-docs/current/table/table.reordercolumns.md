---
title: Table.ReorderColumns
---

# Table.ReorderColumns


Returnerer en tabel med kolonnerne i den angivne rækkefølge.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Returnerer en tabel fra inputtet `table` med kolonnerne i den rækkefølge, der er angivet af `columnOrder`. Rækkefølgen ændres ikke for kolonner, der ikke er angivet på listen. Hvis kolonnen ikke findes, udløses der en fejl, medmindre den valgfrie parameter `missingField` angiver et alternativ (f.eks. `MissingField.UseNull` eller `MissingField.Ignore`).


## Examples

### Example #1
Skift rækkefølgen af kolonnerne \[Phone\] og \[Name\] i tabellen.
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
Skift rækkefølgen af kolonnerne \[Phone\] og \[Address\], eller brug "MissingField.Ignore" i tabellen. Dette ændrer ikke tabellen, fordi kolonnen \[Address\] findes ikke.
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
