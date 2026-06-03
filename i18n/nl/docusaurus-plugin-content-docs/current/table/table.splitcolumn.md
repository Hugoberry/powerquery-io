---
title: Table.SplitColumn
---

# Table.SplitColumn


Splitst met behulp van de opgegeven splitsfunctie de opgegeven kolommen op in een set aanvullende kolommen.


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

Splitst met behulp van de opgegeven splitsfunctie de opgegeven kolommen op in een set aanvullende kolommen.

-   `table`: de tabel met de kolom die moet worden gesplitst.
-   `sourceColumn`: de naam van de kolom die moet worden gesplitst.
-   `splitter`: de splitsfunctie die wordt gebruikt om de kolom te splitsen (bijvoorbeeld: `Splitter.SplitTextByDelimiter` of `Splitter.SplitTextByPosition`).
-   `columnNamesOrNumber`: een lijst met nieuwe kolomnamen die u wilt maken, of het aantal nieuwe kolommen.
-   `default`: overschrijft de waarde die wordt gebruikt wanneer er onvoldoende gesplitste waarden zijn om alle nieuwe kolommen te vullen. De standaardwaarde voor deze parameter is `null`.
-   `extraColumns`: geeft aan wat er moet gebeuren als er meer gesplitste waarden zijn dan het aantal nieuwe kolommen. U kunt een `ExtraValues.Type` opsommingswaarde doorgeven aan deze parameter. De standaardwaarde is `ExtraValues.Ignore`.


## Examples

### Example #1
Splits de naamkolom in voornaam en achternaam.
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
Splits de naamkolom in voornaam en achternaam, en wijzig vervolgens de namen van de nieuwe kolommen.
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
Splits de naamkolom in voornaam en achternaam, wijzig de namen van de nieuwe kolommen, en vul lege waarden in met "-No Entry-".
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
Splits de naamkolom in voornaam en achternaam, en wijzig vervolgens de namen van de nieuwe kolommen. Omdat er mogelijk meer waarden zijn dan het aantal beschikbare kolommen, maakt u van de achternaamkolom een lijst met alle waarden na de voornaam.
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
