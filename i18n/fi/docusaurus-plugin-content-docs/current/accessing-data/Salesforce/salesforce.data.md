---
title: Salesforce.Data
---

# Salesforce.Data


Palauttaa objektit Salesforce-tilistä.


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Remarks

Palauttaa tunnistetiedoissa annetun Salesforce-tilin objektit. Tili yhdistetään annetun ympäristön `loginUrl` kautta. Jos ympäristöä ei anneta, tili yhdistetään tuotantoon (https://login.salesforce.com). Valinnaisen tietueparametrin `options` avulla voidaan määrittää lisäominaisuuksia. Tietue voi sisältää seuraavat kentät:

-   `CreateNavigationProperties` : Looginen arvo (true/false), joka asettaa, muodostetaanko siirtymisominaisuudet palautetuille arvoille (oletusarvo on false).
-   `ApiVersion` : Tälle kyselylle käytettävä Salesforce-ohjelmointirajapinnan versio. Kun sitä ei määritetä, käytetään ohjelmointirajapinnan versiota 29.0.
-   `Timeout` : Kesto, joka määrittää, miten kauan odotetaan, ennen kuin pyyntö palvelimeen lopetetaan. Oletusarvo on lähdekohtainen.



## Category
Accessing data
