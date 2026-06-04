---
title: Netezza.Database
---

# Netezza.Database


Tuo tietoja IBM Netezza -tietokannasta.


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Palauttaa taulukon, joka sisältää Netezza-taulukot, -näkymät ja tallennetut funktiot palvelimen `server` Netezza Server -tietokannasta `database`. Portti voidaan määrittää valinnaisesti palvelimen kanssa eroteltuna kaksoispisteellä. Valinnainen `options`\-tietueparametri voidaan määrittää seuraavien asetusten hallintaa varten:

-   `CreateNavigationProperties`: looginen arvo (true/false), joka asettaa, muodostetaanko siirtymisominaisuudet palautetuille arvoille (oletusarvo on true)
-   `HierarchicalNavigation`: looginen arvo (true/false), joka asettaa, tarkastellaanko taulukoita ryhmiteltyinä niiden rakenteiden nimen mukaan (oletusarvo on false)
-   `ConnectionTimeout`: Kesto, joka määrittää, miten kauan odotetaan, ennen kuin lopetetaan yritys tehdä yhteys palvelimeen. Oletusarvo määräytyy ohjaimen mukaan.
-   `CommandTimeout`: Kesto, joka määrittää, miten kauan palvelinpuolen kyselyn suorittaminen sallitaan, ennen kuin se peruutetaan. Oletusarvo määräytyy ohjaimen mukaan.
-   `NormalizeDatabaseName`: looginen arvo (true/false), joka määrittää, normalisoidaanko tietokannan nimi isoiksi kirjaimiksi vai tulkitaanko se kirjaimellisesti (oletusarvo on true).

Tietueparametri määritetään muodossa \[asetus1 = arvo1, asetus2 = arvo2...\].


## Examples

### Example #1
Näytä IBM Netezza -projektin taulukoiden luettelo.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



