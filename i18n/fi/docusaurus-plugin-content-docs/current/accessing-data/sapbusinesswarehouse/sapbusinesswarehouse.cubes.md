---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


Palauttaa SAP Business Warehouse -järjestelmän InfoCube-kohteet ja kyselyt ryhmiteltynä InfoArea-kohteen mukaan.


## Syntax

```powerquery
SapBusinessWarehouse.Cubes(
    server as text,
    systemNumberOrSystemId as text,
    clientId as text,
    optional optionsOrLogonGroup as any,
    optional options as record
) as table
```


## Remarks

Palauttaa taulukon InfoCube-kohteista ja kyselyistä ryhmiteltynä InfoArea-kohteen mukaan SAP Business Warehouse -esiintymästä palvelimessa `server`, järjestelmänumero `systemNumberOrSystemId` ja asiakastunnus `clientId`. Valinnainen tietueparametri `optionsOrLogonGroup` voidaan määrittää ohjaamaan seuraavia asetuksia:



## Category
Accessing data
