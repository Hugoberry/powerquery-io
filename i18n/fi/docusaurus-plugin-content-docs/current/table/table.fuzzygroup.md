---
title: Table.FuzzyGroup
---

# Table.FuzzyGroup


Ryhmittelee taulukon rivit avainten sumean vastaavuuden perusteella.


## Syntax

```powerquery
Table.FuzzyGroup(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional options as record
) as table
```


## Remarks

Ryhmittelee kohteen `table` rivit siten, että ne vastaavat määritetyn sarakkeen `key` arvoja kullekin riville. Kullekin ryhmälle on muodostettu tietue, joka sisältää avainsarakkeet (ja niiden arvot) sekä `aggregatedColumns` määritetyt yhdistetyt sarakkeet. Tämä toiminto ei voi taata rivien kiinteän järjestyksen palauttamista.

Valinnainen `options`\-joukko voidaan määrittää avainsarakkeiden vertaamista varten. Vaihtoehtoja ovat seuraavat:

-   `Culture` : Sallii tietueiden ryhmittelyn kulttuurikohtaisten sääntöjen perusteella. Se voi olla mikä tahansa kelvollinen maa-asetuksen nimi. Esimerkiksi maa-asetus ja-JP ryhmittelee tietueet japanilaisen kulttuurin perusteella. Oletusarvo on "", joka ryhmittelee invariantin englantilaisen kulttuurin perusteella.
-   `IgnoreCase` : Looginen arvo (tosi/epätosi), joka sallii kirjainkoosta riippumattoman avainryhmittelyn. Esimerkiksi kun arvo on tosi, Viinirypäleet ja viinirypäleet ryhmitelllään yhteen. Oletusarvo on tosi.
-   `IgnoreSpace` : Looginen arvo (tosi/epätosi), joka sallii tekstiosien yhdistämisen ryhmiä etsittäessä. Esimerkiksi kun arvo on tosi, Viini rypäleet ja Viinirypäleet ryhmitelllään yhteen. Oletusarvo on tosi.
-   `SimilarityColumnName` : Sen sarakkeen nimi, joka näyttää syötearvon ja kyseistä syötettä edustavan arvon samankaltaisuuden. Oletusarvo on tyhjäarvo, joten uutta saraketta samankaltaisuuksia varten ei lisätä.
-   `Threshold` : Luku väliltä 0,00–1,00, joka määrittää samankaltaisuuspistemäärän, jolla kaksi arvoa ryhmitellään. Esimerkiksi “Viinirypäleet” ja “vinirypäleet” (i-kirjain puuttuu) on ryhmitelty yhteen vain, jos tämän asetuksen arvo on pienempi kuin 0,90. Raja-arvo 1,00 sallii vain tarkat vastaavuudet. (Huomaa, että sumea “tarkka vastaavuus” saattaa ohittaa erot, kuten kirjainkoon, sanajärjestyksen ja välimerkit.) Oletusarvo on 0,80.
-   `TransformationTable` : Taulukko, joka sallii tietueiden ryhmittelemisen mukautettujen arvojen yhdistämismääritysten perusteella. Sen tulee sisältää sarakkeet from ja to. Esimerkiksi viinirypäleet on ryhmitelty rusinoiden kanssa, jos muuntamistaulukossa on annettu "from"-sarake, joka sisältää viinirypäleet ja "to"-sarake, joka sisältää "rusinat". Huomaa, että muunnosta käytetään kaikkiin muunnostaulukon tekstin esiintymiin. Edellä mainitulla muunnostaulukolla "rypäleet ovat makeita" ryhmitellään myös lauseen "rusinat ovat makeita" kanssa.


## Examples

### Example #1
Ryhmittele taulukko lisäämällä koostesarake \[Count\], joka sisältää kunkin sijainnin työntekijöiden määrän (`each Table.RowCount(_)`).
```powerquery
Table.FuzzyGroup(
    Table.FromRecords(
        {
            [EmployeeID = 1, Location = "Seattle"],
            [EmployeeID = 2, Location = "seattl"],
            [EmployeeID = 3, Location = "Vancouver"],
            [EmployeeID = 4, Location = "Seatle"],
            [EmployeeID = 5, Location = "vancover"],
            [EmployeeID = 6, Location = "Seattle"],
            [EmployeeID = 7, Location = "Vancouver"]
        },
        type table [EmployeeID = nullable number, Location = nullable text]
    ),
    "Location",
    {"Count", each Table.RowCount(_)},
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords({
    [Location = "Seattle", Count = 4],
    [Location = "Vancouver", Count = 3]
})
```




## Category
Table.Transformation
