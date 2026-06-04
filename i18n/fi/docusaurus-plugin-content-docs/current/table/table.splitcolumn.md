---
title: Table.SplitColumn
---

# Table.SplitColumn


Jakaa määritetyn sarakkeen joukoksi uusia sarakkeita käyttäen määritettyä jakotoimintoa.


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

Jakaa määritetyn sarakkeen lisäsarakkeiden joukoksi käyttäen määritettyä jakofunktiota.

-   `table`: Taulukko, joka sisältää jaettavan sarakkeen.
-   `sourceColumn`: Jaettavan sarakkeen nimi.
-   `splitter`: Jakofunktio, jota käytetään sarakkeen jakamiseen (esimerkiksi `Splitter.SplitTextByDelimiter` tai `Splitter.SplitTextByPosition`).
-   `columnNamesOrNumber`: Joko luettelo luotavien uusien sarakkeiden nimistä tai uusien sarakkeiden määrä.
-   `default`: Ohittaa arvon, jota käytetään, kun jaetut arvot eivät riitä kaikkien uusien sarakkeiden täyttämiseen. Tämän parametrin oletusarvo on `null`.
-   `extraColumns`: Määrittää, mitä pitää tehdä, jos jakoarvoja on enemmän kuin uusia sarakkeita. Voit välittää `ExtraValues.Type`\-luettelointiarvon tälle parametrille. Oletusarvo on `ExtraValues.Ignore`.


## Examples

### Example #1
Jaa nimisarake etunimeksi ja sukunimeksi.
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
Jaa nimisarake etunimeksi ja sukunimeksi, ja nimeä sitten uudet sarakkeet.
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
Jaa nimisarake etunimeksi ja sukunimeksi, nimeä uudet sarakkeet uudelleen ja täytä tyhjät kohdat merkinnällä "-No Entry-".
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
Jaa nimisarake etunimeksi ja sukunimeksi, ja nimeä sitten uudet sarakkeet. Koska arvoja voi olla enemmän kuin käytettävissä olevia sarakkeita, tee sukunimen sarakkeesta luettelo, joka sisältää kaikki arvot etunimen jälkeen.
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
