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

Returnerer en tabel fra inputtet <code>table</code> med kolonnerne i den rækkefølge, der er angivet af <code>columnOrder</code>. Rækkefølgen ændres ikke for kolonner, der ikke er angivet på listen.     Hvis kolonnen ikke findes, udløses der en undtagelse, medmindre den valgfrie parameter <code>missingField</code> angiver et alternativ (f.eks. <code>MissingField.UseNull</code> eller <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Skift rækkefølgen af kolonnerne [Phone] og [Name] i tabellen.
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
Skift rækkefølgen af kolonnerne [Phone] og [Address], eller brug &#34;MissingField.Ignore&#34; i tabellen. Dette ændrer ikke tabellen, fordi kolonnen [Address] findes ikke.
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
