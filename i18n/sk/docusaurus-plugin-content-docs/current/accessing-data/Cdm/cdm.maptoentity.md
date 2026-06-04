---
title: Cdm.MapToEntity
---

# Cdm.MapToEntity


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


## Remarks

Vráti tabuľku so stĺpcami primapovanými k atribútom entity v Common Data Modeli vrátane typov údajov. Stĺpce z definície entity sa pridajú, ak nie sú namapované, a všetky nenamapované stĺpce sa odstránia.


