---
title: Table.FromRecords
---

# Table.FromRecords


Konverterer en liste over poster til en tabel.


## Syntax

```powerquery
Table.FromRecords(
    records as list,
    optional columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Converts a specified list of records into a table.

-   `records`: The list of records to convert to a table.
-   `columns`: (Optional) A list of the table's column names, or the table's type.
-   `missingField`: (Optional) Specifies how to handle missing fields in a row. Use one of the following values:
    -   `MissingField.Error`: Any missing fields produce an error (default).
    -   `MissingField.UseNull`: Any missing fields are included as `null` values.
      
    Using `MissingField.Ignore` in this parameter produces an error.


## Examples

### Example #1
Opret en tabel ud fra poster ved at bruge navne på postfelter som kolonnenavne.
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```

Result: 
```powerquery
#table(type table[CustomerID = any, Name = any, Phone = any],
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
})
```


### Example #2
Opret en tabel ud fra poster med angivne kolonner, og vælg talkolonnerne.
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[CustomerID = 1, Name = "Bob"]},
        type table[CustomerID = Number.Type, Name = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"CustomerID"}
```


### Example #3
Opret en tabel, der indeholder fornavn, melleminitial og efternavn på kunderne fra de angivne poster. Hvis nogen af værdierne mangler, skal du erstatte værdien med `null`.
```powerquery
Table.FromRecords({
        [CustomerID = 1, FirstName = "Bob", MiddleInitial = "C", LastName = "Smith"],
        [CustomerID = 2, FirstName = "Sarah", LastName = "Jones"],
        [CustomerID = 3, FirstName = "Harry", MiddleInitial = "H"]
    },
    type table [FirstName = nullable text, MiddleInitial = nullable text, LastName = nullable text],
    MissingField.UseNull)
```

Result: 
```powerquery
#table(type table[FirstName = text, MiddleInitial = text, LastName = text],
{
    {"Bob", "C", "Smith"},
    {"Sarah", null, "Jones"},
    {"Harry", "H", null}
})
```




## Category
Table.Table construction
