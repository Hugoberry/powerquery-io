---
title: Netezza.Database
---

# Netezza.Database


## Description

Tuo tietoja IBM Netezza -tietokannasta.


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Palauttaa taulukon, joka sisältää Netezza-taulukot, -näkymät ja tallennetut funktiot palvelimen <code>server</code> Netezza Server -tietokannasta <code>database</code>. Portti voidaan määrittää valinnaisesti palvelimen kanssa eroteltuna kaksoispisteellä. Valinnainen <code>options</code>-tietueparametri voidaan määrittää seuraavien asetusten hallintaa varten:<ul>        <li><code>CreateNavigationProperties</code>: looginen arvo (true/false), joka asettaa, muodostetaanko siirtymisominaisuudet palautetuille arvoille (oletusarvo on true)</li>        <li><code>HierarchicalNavigation</code>: looginen arvo (true/false), joka asettaa, tarkastellaanko taulukoita ryhmiteltyinä niiden rakenteiden nimen mukaan (oletusarvo on false)</li>        <li><code>ConnectionTimeout</code>: Kesto, joka määrittää, miten kauan odotetaan, ennen kuin lopetetaan yritys tehdä yhteys palvelimeen. Oletusarvo määräytyy ohjaimen mukaan.</li>        <li><code>CommandTimeout</code>: Kesto, joka määrittää, miten kauan palvelinpuolen kyselyn suorittaminen sallitaan, ennen kuin se peruutetaan. Oletusarvo määräytyy ohjaimen mukaan.</li><li><code>NormalizeDatabaseName</code>: looginen arvo (true/false), joka määrittää, normalisoidaanko tietokannan nimi isoiksi kirjaimiksi vai tulkitaanko se kirjaimellisesti (oletusarvo on true).</li></ul>Tietueparametri määritetään muodossa [asetus1 = arvo1, asetus2 = arvo2...].


## Examples

### Example #1 
Näytä IBM Netezza -projektin taulukoiden luettelo.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



