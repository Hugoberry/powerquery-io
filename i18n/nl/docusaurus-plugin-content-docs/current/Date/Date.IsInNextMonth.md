---
title: Date.IsInNextMonth
---

# Date.IsInNextMonth


## Description

Hiermee wordt aangegeven of deze datum plaatsvindt gedurende de volgende maand volgens de huidige datum en tijd op het systeem. Houd er rekening mee dat deze functie onwaar retourneert als een waarde wordt doorgegeven die in de huidige maand valt.


## Syntax

```powerquery
Date.IsInNextMonth(
    dateTime as any
) as logical
```


## Details

Hiermee wordt aangegeven of de opgegeven datetime-waarde <code>dateTime</code> plaatsvindt gedurende de volgende maand volgens de huidige datum en tijd op het systeem. Houd er rekening mee dat deze functie onwaar retourneert als een waarde wordt doorgegeven die in de huidige maand valt.      <ul>      <li><code>dateTime</code>: Een <code>date</code>-, <code>datetime</code>- of <code>datetimezone</code>-waarde die moet worden geëvalueerd.</li>      </ul>


## Examples

### Example #1 
Vaststellen of de maand na de huidige systeemtijd binnen de volgende maand valt.
```powerquery
Date.IsInNextMonth(Date.AddMonths(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
