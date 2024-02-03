---
title: Date.IsInNextYear
---

# Date.IsInNextYear


## Description

Hiermee wordt aangegeven of deze datum plaatsvindt gedurende het volgende jaar volgens de huidige datum en tijd op het systeem. Houd er rekening mee dat deze functie onwaar retourneert als een waarde wordt doorgegeven die in het huidige jaar valt.


## Syntax

```powerquery
Date.IsInNextYear(
    dateTime as any
) as logical
```


## Details

Hiermee wordt aangegeven of de opgegeven datetime-waarde <code>dateTime</code> plaatsvindt gedurende het volgende jaar volgens de huidige datum en tijd op het systeem. Houd er rekening mee dat deze functie onwaar retourneert als een waarde wordt doorgegeven die in het huidige jaar valt.      <ul>      <li><code>dateTime</code>: Een <code>date</code>-, <code>datetime</code>- of <code>datetimezone</code>-waarde die moet worden geëvalueerd.</li>      </ul>


## Examples

### Example #1 
Vaststellen of het jaar na de huidige systeemtijd binnen het volgende jaar valt.
```powerquery
Date.IsInNextYear(Date.AddYears(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
