---
title: Table.SplitColumn
---

# Table.SplitColumn


Dzieli określoną kolumnę na zestaw dodatkowych kolumn przy użyciu określonej funkcji dzielenia.


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

Dzieli określoną kolumnę na zestaw dodatkowych kolumn przy użyciu określonej funkcji rozdzielającej.

-   `table`: tabela zawierająca kolumnę do podziału.
-   `sourceColumn`: nazwa kolumny do podziału.
-   `splitter`: funkcja rozdzielacza używana do rozdzielenia kolumny (na przykład `Splitter.SplitTextByDelimiter` lub `Splitter.SplitTextByPosition`).
-   `columnNamesOrNumber`: lista nowych nazw kolumn do utworzenia lub liczba nowych kolumn.
-   `default`: zastępuje wartość używaną, gdy nie ma wystarczającej liczby wartości podziału, aby wypełnić wszystkie nowe kolumny. Wartość domyślna tego parametru to `null`.
-   `extraColumns`: określa, co zrobić, jeśli może istnieć więcej wartości podziału niż liczba nowych kolumn. Do tego parametru możesz przekazać wartość z wyliczenia `ExtraValues.Type`. Wartość domyślna to `ExtraValues.Ignore`.


## Examples

### Example #1
Podziel kolumnę nazwy na imię i nazwisko.
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
Podziel kolumnę z nazwiskami na imiona i nazwiska, a następnie zmień nazwy nowych kolumn.
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
Podziel kolumnę z nazwiskami na imiona i nazwiska, zmień nazwy nowych kolumn i wypełnij puste pola tekstem „-Brak wpisu-”.
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
Podziel kolumnę z nazwiskami na imiona i nazwiska, a następnie zmień nazwy nowych kolumn. Ze względu na to, że może być więcej wartości niż liczba dostępnych kolumn, ostatnia kolumna z nazwiskami powinna być listą zawierającą wszystkie wartości po imieniu.
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
