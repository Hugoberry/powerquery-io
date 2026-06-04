---
title: Table.SplitColumn
---

# Table.SplitColumn


Razdeli določen stolpec v niz dodatnih stolpcev z uporabo določene funkcije razdeljevalnika.


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

Razdeli določen stolpec v niz dodatnih stolpcev z uporabo določene funkcije razdeljevalnika.

-   `table`: tabela, ki vsebuje stolpec, ki ga želite razdeliti.
-   `sourceColumn`: ime stolpca, ki ga želite razdeliti.
-   `splitter`: funkcija razdeljevalnika, uporabljena za razdelitev stolpca (na primer `Splitter.SplitTextByDelimiter` ali `Splitter.SplitTextByPosition`).
-   `columnNamesOrNumber`: seznam novih imen stolpcev, ki jih želite ustvariti, ali število novih stolpcev.
-   `default`: Preglasi vrednost, ki se uporabi, ko ni dovolj razdeljenih vrednosti za zapolnitev vseh novih stolpcev. Privzeta vrednost za ta parameter je `null`.
-   `extraColumns`: Določa, kaj storiti, če je morda več razdeljenih vrednosti, kot je števila novih stolpcev. Temu parametru lahko določite vrednost oštevilčenja `ExtraValues.Type`. Privzeta vrednost je `ExtraValues.Ignore`.


## Examples

### Example #1
Stolpec z imenom razdelite na ime in priimek.
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
Razdeli stolpec z imenom na ime in priimek, nato preimenuj nova stolpca.
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
Razdeli stolpec z imenom na ime in priimek, preimenuj nova stolpca in zapolni prazna polja z"–Ni vnosa–".
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
Razdeli stolpec z imenom na ime in priimek, nato preimenuj nova stolpca. Ker je lahko več vrednosti, kot je razpoložljivih stolpcev, nastavite stolpec priimka kot seznam, ki vključuje vse vrednosti po imenu.
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
