---
title: Value.NativeQuery
---

# Value.NativeQuery


Hiermee evalueert u een query aan de hand van een doel.


## Syntax

```powerquery
Value.NativeQuery(
    target as any,
    query as text,
    optional parameters as any,
    optional options as record
) as any
```


## Remarks

Hiermee wordt `query` voor `target` geëvalueerd met de parameters die zijn opgegeven in `parameters` en de opties die zijn opgegeven in `options`.

De uitvoer van de query wordt gedefinieerd door `target`.

`target` biedt context voor de bewerking die wordt beschreven door `query`.

`query` bevat een beschrijving van de query die moet worden uitgevoerd voor `target`. `query` wordt uitgedrukt op een manier die specifiek is voor `target` (bijvoorbeeld een T-SQL-instructie).

De optionele `parameters`\-waarde kan een lijst of record bevatten waarmee de parameterwaarden worden doorgegeven die worden verwacht door `query`.

De optionele `options`\-record bevat mogelijk opties die van invloed zijn op het evaluatiegedrag van `query` voor `target`. Deze opties zijn specifiek voor `target`.



## Category
Values
