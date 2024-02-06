---
title: Date.IsInNextNQuarters
---

# Date.IsInNextNQuarters


Hiermee wordt aangegeven of deze datum plaatsvindt gedurende de volgende kwartalen volgens de huidige datum en tijd op het systeem. Houd er rekening mee dat deze functie onwaar retourneert als een waarde wordt doorgegeven die in het huidige kwartaal valt.


## Syntax

```powerquery
Date.IsInNextNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Remarks

Hiermee wordt aangegeven of de opgegeven datetime-waarde <code>dateTime</code> plaatsvindt gedurende de volgende kwartalen volgens de huidige datum en tijd op het systeem. Houd er rekening mee dat deze functie onwaar retourneert als een waarde wordt doorgegeven die in het huidige kwartaal valt.      <ul>      <li><code>dateTime</code>: Een <code>date</code>-, <code>datetime</code>- of <code>datetimezone</code>-waarde die moet worden geëvalueerd.</li>      <li><code>quarters</code>: Het aantal kwartalen.</li>      </ul>


## Examples

### Example #1 
Bepalen of het kwartaal na de huidige systeemtijd plaatsvindt in de volgende twee kwartalen.
```powerquery
Date.IsInNextNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
