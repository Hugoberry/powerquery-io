---
title: Table.FromRecords
---

# Table.FromRecords


Konverterar en lista med poster till en tabell.


## Syntax

```powerquery
Table.FromRecords(
    records as list,
    optional columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Konverterar en angiven lista med poster till en tabell.

-   `records`: Listan över poster som ska konverteras till en tabell.
-   `columns`: (Valfritt) En lista över tabellens kolumnnamn eller tabellens typ.
-   `missingField`: (Valfritt) Anger hur fält som saknas ska hanteras på en rad. Använd något av följande värden:
    -   `MissingField.Error`: Alla fält som saknas genererar ett fel (standard).
    -   `MissingField.UseNull`: Fält som saknas inkluderas som `null` värden.
      
    Om du använder `MissingField.Ignore` i den här parametern uppstår ett fel.


## Examples

### Example #1
Skapa en tabell från poster med postfältsnamn som kolumnnamn.
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
Skapar en tabell från poster med typbestämda kolumner och välj nummerkolumnerna.
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
Skapa en tabell som innehåller förnamn, mellan initial och efternamn för kunderna från de angivna posterna. Om något av värdena saknas ersätter du värdet med `null`.
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
