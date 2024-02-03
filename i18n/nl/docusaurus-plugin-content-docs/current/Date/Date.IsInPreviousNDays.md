---
title: Date.IsInPreviousNDays
---

# Date.IsInPreviousNDays


## Description

Hiermee wordt aangegeven of deze datum plaatsvindt gedurende de voorgaande dagen volgens de huidige datum en tijd op het systeem. Houd er rekening mee dat deze functie onwaar retourneert als een waarde wordt doorgegeven die in de huidige dag valt.


## Syntax

```powerquery
Date.IsInPreviousNDays(
    dateTime as any,
    days as number
) as logical
```


## Details

Hiermee wordt aangegeven of de opgegeven datetime-waarde <code>dateTime</code> plaatsvindt gedurende de voorgaande dagen volgens de huidige datum en tijd op het systeem. Houd er rekening mee dat deze functie onwaar retourneert als een waarde wordt doorgegeven die in de huidige dag valt.      <ul>      <li><code>dateTime</code>: Een <code>date</code>-, <code>datetime</code>- of <code>datetimezone</code>-waarde die moet worden geëvalueerd.</li>      <li><code>days</code>: Het aantal dagen.</li>      </ul>


## Examples

### Example #1 
Bepalen of de dag voor de huidige systeemtijd plaatsvindt in de vorige twee dagen.
```powerquery
Date.IsInPreviousNDays(Date.AddDays(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
