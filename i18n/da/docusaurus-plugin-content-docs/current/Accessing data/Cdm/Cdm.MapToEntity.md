---
title: Cdm.MapToEntity
---

# Cdm.MapToEntity


## Description

Returnerer en tabel med kolonner, der er knyttet til attributterne for en enhed i Common Data Model, herunder datatyper.


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

Returnerer en tabel med kolonner, der er knyttet til attributterne for en enhed i Common Data Model, herunder datatyper. Kolonner fra enhedsdefinitionen tilføjes, hvis de ikke er tilknyttet, og alle ikke-tilknyttede kolonner bliver fjernet.


