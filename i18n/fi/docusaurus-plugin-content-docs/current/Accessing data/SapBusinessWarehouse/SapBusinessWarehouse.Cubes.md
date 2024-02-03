---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


## Description

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


## Details

Palauttaa taulukon InfoCube-kohteista ja kyselyistä ryhmiteltynä InfoArea-kohteen mukaan SAP Business Warehouse -esiintymästä palvelimessa <code>server</code>, järjestelmänumero <code>systemNumberOrSystemId</code> ja asiakastunnus <code>clientId</code>. Valinnainen tietueparametri <code>optionsOrLogonGroup</code> voidaan määrittää ohjaamaan seuraavia asetuksia:        



## Category
Accessing data
