---
title: Cdm.MapToEntity
---

# Cdm.MapToEntity


Restituisce una tabella con colonne mappate agli attributi di un&#39;entità in Common Data Model, inclusi i tipi di dati.


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

Restituisce una tabella con colonne mappate agli attributi di un'entità in Common Data Model, inclusi i tipi di dati. Verranno aggiunte le colonne della definizione di entità se non sono mappate e le eventuali colonne non mappate verranno rimosse.


