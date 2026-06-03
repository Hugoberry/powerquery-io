---
title: Date.IsInPreviousQuarter
---

# Date.IsInPreviousQuarter


Hiermee wordt aangegeven of deze datum plaatsvindt gedurende het voorgaande kwartaal volgens de huidige datum en tijd op het systeem. Houd er rekening mee dat deze functie onwaar retourneert als een waarde wordt doorgegeven die in het huidige kwartaal valt.


## Syntax

```powerquery
Date.IsInPreviousQuarter(
    dateTime as any
) as logical
```


## Remarks

Hiermee wordt aangegeven of de opgegeven datetime-waarde `dateTime` plaatsvindt gedurende het voorgaande kwartaal volgens de huidige datum en tijd op het systeem. Houd er rekening mee dat deze functie onwaar retourneert als een waarde wordt doorgegeven die in het huidige kwartaal valt.

-   `dateTime`: Een `date`\-, `datetime`\- of `datetimezone`\-waarde die moet worden geëvalueerd.


## Examples

### Example #1
Vaststellen of het kwartaal vóór de huidige systeemtijd binnen het vorige kwartaal valt.
```powerquery
Date.IsInPreviousQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
