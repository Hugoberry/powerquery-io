---
title: Table.SplitColumn
---

# Table.SplitColumn


Divizează coloana specificată într-un set de coloane suplimentare utilizând funcția de divizare specificată.


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

Divizează coloana specificată într-un set de coloane suplimentare utilizând funcția de divizare specificată.

-   `table`: Tabelul care conține coloana de divizat.
-   `sourceColumn`: Numele coloanei de divizat.
-   `splitter`: Funcția de divizare utilizată pentru divizarea coloanei (de exemplu, `Splitter.SplitTextByDelimiter` sau `Splitter.SplitTextByPosition`).

: Fie o listă de nume de coloane noi de creat, fie numărul de coloane noi.`columnNamesOrNumber`-   `default`: Suprascrie valoarea utilizată atunci când nu există suficiente valori divizate pentru a umple toate coloanele noi. Valoarea implicită pentru acest parametru este `null`.
-   `extraColumns`: Specifică ce să faceți dacă pot exista mai multe valori divizate decât numărul de coloane noi. Puteți transmite o valoare de enumerare `ExtraValues.Type` la acest parametru. Valoarea implicită este `ExtraValues.Ignore`.


## Examples

### Example #1
Divizați coloana de nume în prenume și nume de familie.
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
Divizați coloana nume în prenume și nume de familie, apoi redenumiți noile coloane.
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
Divizați coloana nume în prenume și nume de familie, redenumiți noile coloane și completați orice spații goale cu „-Fără intrare-”.
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
Divizați coloana nume în prenume și nume de familie, apoi redenumiți noile coloane. Deoarece pot exista mai multe valori decât numărul de coloane disponibile, transformați coloana de nume de familie într-o listă care include toate valorile după prenume.
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
