---
title: Date.IsInPreviousNMonths
---

# Date.IsInPreviousNMonths


## Description

Hiermee wordt aangegeven of deze datum plaatsvindt gedurende de voorgaande maanden volgens de huidige datum en tijd op het systeem. Houd er rekening mee dat deze functie onwaar retourneert als een waarde wordt doorgegeven die in de huidige maand valt.


## Syntax

```powerquery
Date.IsInPreviousNMonths(
    dateTime as any,
    months as number
) as logical
```


## Details

Hiermee wordt aangegeven of de opgegeven datetime-waarde <code>dateTime</code> plaatsvindt gedurende de voorgaande maanden volgens de huidige datum en tijd op het systeem. Houd er rekening mee dat deze functie onwaar retourneert als een waarde wordt doorgegeven die in de huidige maand valt.      <ul>      <li><code>dateTime</code>: Een <code>date</code>-, <code>datetime</code>- of <code>datetimezone</code>-waarde die moet worden geëvalueerd.</li>      <li><code>months</code>: Het aantal maanden.</li>      </ul>


## Examples

### Example #1 
Bepalen of de maand voor de huidige systeemtijd plaatsvindt in de vorige twee maanden.
```powerquery
Date.IsInPreviousNMonths(Date.AddMonths(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
