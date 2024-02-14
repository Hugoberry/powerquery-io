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

Hiermee wordt <code>query</code> voor <code>target</code> geëvalueerd met de parameters die zijn opgegeven in <code>parameters</code> en de opties die zijn opgegeven in <code>options</code>.<br />De uitvoer van de query wordt gedefinieerd door <code>target</code>.<br /><code>target</code> biedt context voor de bewerking die wordt beschreven door <code>query</code>.<br /><code>query</code> bevat een beschrijving van de query die moet worden uitgevoerd voor <code>target</code>. <code>query</code> wordt uitgedrukt op een manier die specifiek is voor <code>target</code> (bijvoorbeeld een T-SQL-instructie).<br />De optionele <code>parameters</code>-waarde kan een lijst of record bevatten waarmee de parameterwaarden worden doorgegeven die worden verwacht door <code>query</code>.<br />De optionele <code>options</code>-record bevat mogelijk opties die van invloed zijn op het evaluatiegedrag van <code>query</code> voor <code>target</code>. Deze opties zijn specifiek voor <code>target</code>.<br />



## Category
Values
