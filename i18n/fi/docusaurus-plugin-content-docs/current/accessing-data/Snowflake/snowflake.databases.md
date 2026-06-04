---
title: Snowflake.Databases
---

# Snowflake.Databases


Tuo tietoja Snowflake Computing -varastosta.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Remarks

Palauttaa taulukon, jossa on luettelo Snowflake Computing -`varastossa` `palvelimessa` sijaitsevista taulukoista. Valinnainen tietueparametri `options` voidaan myös määrittää seuraavien asetusten hallintaa varten:

-   `Role`: tekstiarvo, jota käytetään roolin nimenä yhteydelle.
-   `CreateNavigationProperties`: totuusarvo (true/false), joka määrittää, muodostetaanko siirtymisominaisuudet palautetuille arvoille (oletusasetus on true)
-   `ConnectionTimeout`: niiden sekuntien määrä, jotka odotetaan verkkovastauksia Snowflakesta.
-   `CommandTimeout`: niiden sekuntien määrä, jotka odotetaan kyselyn suorittamista.


## Examples

### Example #1
Näytä luettelo Snowflake-varaston taulukoista.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



