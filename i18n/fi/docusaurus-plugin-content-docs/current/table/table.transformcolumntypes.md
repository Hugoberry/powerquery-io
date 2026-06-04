---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


Ottaa käyttöön tyyppimuunnokset muodossa \{ column, type \} käyttäen määritettyä maa-asetusta.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as any
) as table
```


## Remarks

Palauttaa taulukon käyttämällä muunnostoimintoja määritetyissä sarakkeissa käyttäen valinnaista maa-asetusta.

-   `table`: Muunnettava syötetaulukko.
-   `typeTransformations`: Käytettävät tyyppimuunnokset. Yksittäisen muunnoksen muoto on \{ column name, type value \}. Muunnosten luettelon avulla voidaan muuttaa useamman kuin yhden sarakkeen tyyppejä kerrallaan. Virheilmoitus annetaan, jos saraketta ei ole olemassa.
-   `culture`: (Valinnainen) Maa-asetus, jota käytetään muuntaessa saraketyyppejä (esimerkiksi en-US). Jos `culture` määritetään, se voi sisältää seuraavat kentät:
    -   `Maa-asetus`: Maa-asetus, jota käytetään saraketyyppien muuntamiseen (esimerkiksi "en-US").
    -   `MissingField`: Jos saraketta ei ole, syntyy virhe, ellei tämä kenttä määritä vaihtoehtoista toimintaa (esimerkiksi `MissingField.UseNull` tai `MissingField.Ignore`).

Parametrin `typeTransformations` tyypin arvo voi olla `any`, kaikki `number`\-tyypit, `text`, kaikki `date`\-, `time`\-, `datetime`\-, `datetimezone`\- ja `duration`\-tyypit, `logical` tai `binary`. Tyypit `list`, `record`, `table` ja `function` eivät kelpaa tälle parametrille.  
  
Jokaisessa kohteessa `typeTransformations` olevassa sarakkeessa käytetään tavallisesti määritettyä tyyppiarvoa vastaavaa .From-menetelmää muunnoksen suorittamiseen. Jos sarakkeelle annetaan esimerkiksi `Currency.Type`\-tyyppiarvo, muunnosfunktiota `Currency.From` käytetään kyseisen sarakkeen jokaisessa arvossa.


## Examples

### Example #1
Muunna ensimmäisen sarakkeen numeroarvot tekstiarvoihin.
```powerquery
let
    Source = #table(type table [a = number, b = number],
    {
        {1, 2},
        {3, 4}
    }),
    #"Transform Column" = Table.TransformColumnTypes(
        Source,
        {"a", type text}
    )
in
    #"Transform Column"
```

Result: 
```powerquery
#table(type table [a = text, b = number],
{
    {"1", 2},
    {"3", 4}
})
```


### Example #2
Muunna taulukon päivämäärät niiden ranskankielisen tekstin vastaaviksi.
```powerquery
let
    Source = #table(type table [Company ID = text, Country = text, Date = date],
    {
        {"JS-464", "USA", #date(2024, 3, 24)},
        {"LT-331", "France", #date(2024, 10, 5)},
        {"XE-100", "USA", #date(2024, 5, 21)},
        {"RT-430", "Germany", #date(2024, 1,18)},
        {"LS-005", "France", #date(2023, 12, 31)},
        {"UW-220", "Germany", #date(2024, 2, 25)}
    }),
    #"Transform Column" = Table.TransformColumnTypes(
        Source,
        {"Date", type text},
        "fr-FR"
    )
in
    #"Transform Column"
```

Result: 
```powerquery
#table(type table [Company ID = text, Country = text, Date = text],
{
    {"JS-464", "USA", "24/03/2024"},
    {"LT-331", "France", "05/10/2024"},
    {"XE-100", "USA", "21/05/2024"},
    {"RT-430", "Germany", "18/01/2024"},
    {"LS-005", "France", "31/12/2023"},
    {"UW-220", "Germany", "25/02/2024"}
})
```


### Example #3
Muunna taulukon päivämäärät niiden saksalaisiksi tekstivastaavuiksi ja taulukon arvot prosenttiosuuksiksi.
```powerquery
let
    Source = #table(type table [Date = date, Customer ID = text, Value = number],
    {
        {#date(2024, 3, 12), "134282", .24368},
        {#date(2024, 5, 30), "44343", .03556},
        {#date(2023, 12, 14), "22", .3834}
    }),
    #"Transform Columns" = Table.TransformColumnTypes(
        Source,
        {{"Date", type text}, {"Value", Percentage.Type}},
        "de-DE")
in
    #"Transform Columns"
```

Result: 
```powerquery
#table(type table [Date = text, Customer ID = text, Value = Percentage.Type],
{
    {"12.03.2024", "134282", .24368},
    {"30.05.2024", "44343", .03556},
    {"14.12.2023", "22", .3834}
})
```


### Example #4
Käytä muunnoksia tietuearvolla kohteelle `culture`.
```powerquery
let
    Source = #table(type table [Company ID = text, Country = text, Date = date],
    {
        {"JS-464", "USA", #date(2024, 3, 24)},
        {"LT-331", "France", #date(2024, 10, 5)},
        {"XE-100", "USA", #date(2024, 5, 21)},
        {"RT-430", "Germany", #date(2024, 1,18)},
        {"LS-005", "France", #date(2023, 12, 31)},
        {"UW-220", "Germany", #date(2024, 2, 25)}
    }),
    #"Transform Column" = Table.TransformColumnTypes(
        Source,
        {{"Date", type text}, {"NewColumn", type number}},
        [Culture="fr-FR", MissingField=MissingField.UseNull]
    )
in
    #"Transform Column"
```

Result: 
```powerquery
#table(type table [Company ID = text, Country = text, Date = text, NewColumn = number],
{
    {"JS-464", "USA", "24/03/2024", null},
    {"LT-331", "France", "05/10/2024", null},
    {"XE-100", "USA", "21/05/2024", null},
    {"RT-430", "Germany", "18/01/2024", null},
    {"LS-005", "France", "31/12/2023", null},
    {"UW-220", "Germany", "25/02/2024", null}
})
```




## Category
Table.Transformation
