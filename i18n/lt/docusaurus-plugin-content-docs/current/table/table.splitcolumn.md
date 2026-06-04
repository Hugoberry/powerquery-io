---
title: Table.SplitColumn
---

# Table.SplitColumn


Nurodyti stulpeliai išskaidomi į papildomų stulpelių rinkinį naudojant nurodytą skaidiklio funkciją.


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

Nurodyti stulpeliai išskaidomi į papildomų stulpelių rinkinį naudojant nurodytą skaidiklio funkciją.

-   `table`: lentelė, kurioje yra skaidytinas stulpelis.
-   `sourceColumn`: skaidytino stulpelio pavadinimas.
-   `splitter`: skaidiklio funkcija, naudojama stulpeliui skaidyti (pvz., `Splitter.SplitTextByDelimiter` arba `Splitter.SplitTextByPosition`).
-   `columnNamesOrNumber`: kurtinų naujų stulpelių pavadinimų sąrašas arba naujų stulpelių skaičius.
-   `default`: perrašoma reikšmė, naudojama, kai nepakanka išskaidytų reikšmių, kad būtų užpildyti visi nauji stulpeliai. Numatytoji šio parametro reikšmė yra `null`.
-   `extraColumns`: nurodoma, ką daryti, jei išskaidytų reikšmių gali būti daugiau nei naujų stulpelių skaičius. Šiam parametrui galite perduoti `ExtraValues.Type` išvardijimo reikšmę. Numatytoji reikšmė yra `ExtraValues.Ignore`.


## Examples

### Example #1
Išskaidykite vardo stulpelį į vardą ir pavardę.
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
Išskaidykite vardo stulpelį į vardą ir pavardę, tada pervardykite naujus stulpelius.
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
Išskaidykite vardo stulpelį į vardą ir pavardę, pervardykite naujus stulpelius ir užpildykite visus tuščius laukus tekstu „-Įrašo nėra-“.
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
Išskaidykite vardo stulpelį į vardą ir pavardę, tada pervardykite naujus stulpelius. Kadangi gali būti daugiau reikšmių nei galimų stulpelių skaičius, pavardės stulpelį padarykite sąrašu, kuriame visos reikšmės būtų po vardo.
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
