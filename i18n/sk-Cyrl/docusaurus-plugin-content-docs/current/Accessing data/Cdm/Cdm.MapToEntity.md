---
title: Cdm.MapToEntity
---

# Cdm.MapToEntity


## Description

Vráti tabuľku so stĺpcami primapovanými k atribútom entity v Common Data Modeli vrátane typov údajov.


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

Vráti tabuľku so stĺpcami primapovanými k atribútom entity v Common Data Modeli vrátane typov údajov. Stĺpce z definície entity sa pridajú, ak nie sú namapované, a všetky nenamapované stĺpce sa odstránia.


