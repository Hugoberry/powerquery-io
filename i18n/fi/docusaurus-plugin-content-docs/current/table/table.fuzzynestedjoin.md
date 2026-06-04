---
title: Table.FuzzyNestedJoin
---

# Table.FuzzyNestedJoin


Suorittaa sumean liitoksen taulukoiden välillä annetuille sarakkeille ja tuo liitostuloksen uuteen sarakkeeseen.


## Syntax

```powerquery
Table.FuzzyNestedJoin(
    table1 as table,
    key1 as any,
    table2 as table,
    key2 as any,
    newColumnName as text,
    optional joinKind as JoinKind.Type,
    optional joinOptions as record
) as table
```


## Remarks

Liittää taulukon `table1` rivit ja taulukon `table2` rivit yhteen sarakkeiden `key1` (taulukolle `table1`) ja `key2` (taulukolle `table2`) valitsemien avainsarakkeiden arvojen sumean vertailun perusteella. Tulokset lisätään uuteen sarakkeeseen nimeltä `newColumnName`.

Sumea vastaavuus on vertailu, joka perustuu tekstin samankaltaisuuteen tekstin yhtäläisyyden sijaan.

Valinnainen liitos `joinKind` määrittää suoritettavan liitoksen tyypin. Oletusarvon mukaan vasen ulkoliitos suoritetaan, jos kohdetta `joinKind` ei määritetä. Vaihtoehtoja ovat seuraavat:

-   `JoinKind.Inner`
-   `JoinKind.LeftOuter`
-   `JoinKind.RightOuter`
-   `JoinKind.FullOuter`
-   `JoinKind.LeftAnti`
-   `JoinKind.RightAnti`
-   `JoinKind.LeftSemi`
-   `JoinKind.RightSemi`

Valinnainen kohteen `joinOptions` joukko voidaan sisällyttää määrittämään, miten avainsarakkeita verrataan. Vaihtoehtoja ovat seuraavat:

-   `ConcurrentRequests` : Luku 1–8, joka määrittää sumean vastaavuuden yhteydessä käytettävien rinnakkaisten säikeiden määrän. Oletusarvo on 1.
-   `Culture` : Sallii tietueiden vastaavuuden kulttuurikohtaisten sääntöjen perusteella. Se voi olla mikä tahansa kelvollinen maa-asetuksen nimi. Esimerkiksi maa-asetus ja-JP vastaa tietueet japanilaisen kulttuurin perusteella. Oletusarvo on "", joka vastaa invariantin englantilaisen kulttuurin perusteella.
-   `IgnoreCase` : Looginen arvo (tosi/epätosi), joka sallii kirjainkoosta riippumattoman avainvastaavuuden. Esimerkiksi kun arvo on tosi, Viinirypäleet ja viinirypäleet vastaavat toisiaan. Oletusarvo on tosi.
-   `IgnoreSpace` : Looginen arvo (tosi/epätosi), joka sallii tekstiosien yhdistämisen vastaavuuksia etsittäessä. Esimerkiksi kun arvo on tosi, Viini rypäleet ja Viinirypäleet vastaavat toisiaan. Oletusarvo on tosi.
-   `NumberOfMatches` : Kokonaisluku, joka määrittää niiden vastaavien rivien enimmäismäärän, jotka voidaan palauttaa kullekin syöteriville. Esimerkiksi arvo 1 palauttaa enintään yhden vastaavan rivin kullekin syöteriville. Jos tätä asetusta ei anneta, kaikki vastaavat rivit palautetaan.
-   `SimilarityColumnName` : Sen sarakkeen nimi, joka näyttää syötearvon ja kyseistä syötettä edustavan arvon samankaltaisuuden. Oletusarvo on tyhjäarvo, joten uutta saraketta samankaltaisuuksia varten ei lisätä.
-   `Threshold` : Luku väliltä 0,00–1,00, joka määrittää samankaltaisuuspistemäärän, jolla kaksi arvoa yhdistetään. Esimerkiksi “Viinirypäleet” ja “Vinirypäleet” (i-kirjain puuttuu) täsmäävät vain, jos tämän asetuksen arvo on pienempi kuin 0,90. Raja-arvo 1,00 sallii vain tarkat vastaavuudet. (Huomaa, että sumea “tarkka vastine” saattaa ohittaa erot, kuten kirjainkoon, sanajärjestyksen ja välimerkit.) Oletusarvo on 0,80.
-   `TransformationTable` : Taulukko, joka sallii tietueiden vastaamisen mukautettujen arvojen yhdistämismääritysten perusteella. Sen tulee sisältää sarakkeet from ja to. Esimerkiksi viinirypäleet muodostaa vastaavuuden rusinoiden kanssa, jos muuntamistaulukossa on annettu "from"-sarake, joka sisältää viinirypäleet ja "to"-sarake, joka sisältää "rusinat". Huomaa, että muunnosta käytetään kaikkiin muunnostaulukon tekstin esiintymiin. Edellä mainitulla muunnostaulukolla "rypäleet ovat makeita" vastaa myös lausetta "rusinat ovat makeita".


## Examples

### Example #1
Kahden taulukon vasen sumea sisäliitos perustuen kohteeseen \[FirstName\]
```powerquery
Table.FuzzyNestedJoin(
    Table.FromRecords(
        {
            [CustomerID = 1, FirstName1 = "Bob", Phone = "555-1234"],
            [CustomerID = 2, FirstName1 = "Robert", Phone = "555-4567"]
        },
        type table [CustomerID = nullable number, FirstName1 = nullable text, Phone = nullable text]
    ),
    {"FirstName1"},
    Table.FromRecords(
        {
            [CustomerStateID = 1, FirstName2 = "Bob", State = "TX"],
            [CustomerStateID = 2, FirstName2 = "bOB", State = "CA"]
        },
        type table [CustomerStateID = nullable number, FirstName2 = nullable text, State = nullable text]
    ),
    {"FirstName2"},
    "NestedTable",
    JoinKind.LeftOuter,
    [IgnoreCase = true, IgnoreSpace = false]
)
```

Result: 
```powerquery
Table.FromRecords({
    [
        CustomerID = 1,
        FirstName1 = "Bob",
        Phone = "555-1234",
        NestedTable = Table.FromRecords({
            [
                CustomerStateID = 1,
                FirstName2 = "Bob",
                State = "TX"
            ],
            [
                CustomerStateID = 2,
                FirstName2 = "bOB",
                State = "CA"
            ]
        })
    ],
    [
        CustomerID = 2,
        FirstName1 = "Robert",
        Phone = "555-4567",
        NestedTable = Table.FromRecords({})
    ]
})
```




## Category
Table.Transformation
