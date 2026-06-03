---
title: Table.SplitColumn
---

# Table.SplitColumn


Fractionne la colonne spécifiée dans un ensemble de colonnes supplémentaires à l'aide de la fonction de fractionnement spécifiée.


## Syntax

```powerquery
Table.SplitColumn(
    table as table,
    sourceColumn as text,
    splitter as function,
    optional columnNamesOrNumber as any,
    optional default as any,
    optional extraColumns as any
) as table
```


## Remarks

Fractionne la colonne spécifiée dans un ensemble de colonnes supplémentaires à l'aide de la fonction de fractionnement spécifiée.

-   `table` : La table contenant la colonne à fractionner.
-   `sourceColumn` : Le nom de la colonne à fractionner.
-   `splitter` : La fonction de fractionnement utilisée pour fractionner la colonne (par exemple, `Splitter.SplitTextByDelimiter` ou `Splitter.SplitTextByPosition`).
-   `columnNamesOrNumber` : Soit une liste de nouveaux noms de colonnes à créer, soit le nombre de nouvelles colonnes.
-   `default` : Remplace la valeur utilisée lorsqu’il n’y a pas suffisamment de valeurs fractionnées pour remplir toutes les nouvelles colonnes. La valeur par défaut de ce paramètre est `null`.
-   `extraColumns` : Spécifie ce qu’il faut faire s’il peut y avoir plus de valeurs fractionnées que le nombre de nouvelles colonnes. Vous pouvez passer une valeur d’énumération `ExtraValues.Type` à ce paramètre. La valeur par défaut est `ExtraValues.Ignore`.


## Examples

### Example #1
Divisez la colonne de nom en prénom et nom.
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul", "543-7890"},
        {4, "Cristina Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "))
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, Name.1 = text, Name.2 = text, Phone = text],
{
    {1, "Bob", "White", "123-4567"},
    {2, "Jim", "Smith", "987-6543"},
    {3, "Paul", null, "543-7890"},
    {4, "Cristina", "Best", "232-1550"}
})
```


### Example #2
Divisez la colonne de nom en prénom et nom, puis renommez les nouvelles colonnes.
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul", "543-7890"},
        {4, "Cristina Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "),
        {"First Name", "Last Name"})
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, First Name = text, Last Name = text, Phone = text],
{
    {1, "Bob", "White", "123-4567"},
    {2, "Jim", "Smith", "987-6543"},
    {3, "Paul", null, "543-7890"},
    {4, "Cristina", "Best", "232-1550"}
})
```


### Example #3
Divisez la colonne de nom en prénom et nom, renommez les nouvelles colonnes et remplissez les espaces vides avec "-Aucune entrée-".
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul", "543-7890"},
        {4, "Cristina Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "),
        {"First Name", "Last Name"},
        "-No Entry-")
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, First Name = text, Last Name = text, Phone = text],
{
    {1, "Bob", "White", "123-4567"},
    {2, "Jim", "Smith", "987-6543"},
    {3, "Paul", "-No Entry-", "543-7890"},
    {4, "Cristina", "Best", "232-1550"}
})
```


### Example #4
Divisez la colonne de nom en prénom et nom, puis renommez les nouvelles colonnes. Étant donné qu’il pourrait y avoir plus de valeurs que de colonnes disponibles, faites de la colonne de nom une liste qui inclut toutes les valeurs après le prénom.
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul Green", "543-7890"},
        {4, "Cristina J. Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "),
        {"First Name", "Last Name"},
        null,
        ExtraValues.List)
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, First Name = text, Last Name = text, Phone = text],
{
    {1, "Bob", {"White"}, "123-4567"},
    {2, "Jim", {"Smith"}, "987-6543"},
    {3, "Paul", {"Green"}, "543-7890"},
    {4, "Cristina", {"J.", "Best"}, "232-1550"}
})
```




## Category
Table.Transformation
