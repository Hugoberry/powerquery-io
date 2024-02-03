---
title: Snowflake.Databases
---

# Snowflake.Databases


## Description

Tuo tietoja Snowflake Computing -varastosta.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Details

Palauttaa taulukon, jossa on luettelo Snowflake Computing -<code>varastossa</code> <code>palvelimessa</code> sijaitsevista taulukoista. Valinnainen tietueparametri <code>options</code> voidaan myös määrittää seuraavien asetusten hallintaa varten:<ul><li><code>Role</code>: tekstiarvo, jota käytetään roolin nimenä yhteydelle.</li><li><code>CreateNavigationProperties</code>: totuusarvo (true/false), joka määrittää, muodostetaanko siirtymisominaisuudet palautetuille arvoille (oletusasetus on true)</li><li><code>ConnectionTimeout</code>: niiden sekuntien määrä, jotka odotetaan verkkovastauksia Snowflakesta.</li><li><code>CommandTimeout</code>: niiden sekuntien määrä, jotka odotetaan kyselyn suorittamista.</li></ul>    


## Examples

### Example #1 
Näytä luettelo Snowflake-varaston taulukoista.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



