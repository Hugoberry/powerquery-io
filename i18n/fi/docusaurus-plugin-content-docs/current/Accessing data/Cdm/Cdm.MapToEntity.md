---
title: Cdm.MapToEntity
---

# Cdm.MapToEntity


## Description

Palauttaa taulukon, jonka sarakkeet on yhdistetty Common Data Modelin entiteetin määritteisiin, tietotyypit mukaan lukien.


## Syntax

```powerquery
Cdm.MapToEntity(
    table as table,
    columnDefinitions as any,
    optional defaultType as type,
    optional defaultCdmClass as text
) as table
```


## Details

Palauttaa taulukon, jonka sarakkeet on yhdistetty Common Data Modelin entiteetin määritteisiin, tietotyypit mukaan lukien. Sarakkeet entiteetin määritelmästä lisätään, jos niitä ei ole yhdistetty, ja yhdistämättömät sarakkeet poistetaan.


