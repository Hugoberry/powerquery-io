---
title: Date.IsInPreviousMonth
---

# Date.IsInPreviousMonth


Hiermee wordt aangegeven of deze datum plaatsvindt gedurende de voorgaande maand volgens de huidige datum en tijd op het systeem. Houd er rekening mee dat deze functie onwaar retourneert als een waarde wordt doorgegeven die in de huidige maand valt.


## Syntax

```powerquery
Date.IsInPreviousMonth(
    dateTime as any
) as logical
```


## Remarks

Hiermee wordt aangegeven of de opgegeven datetime-waarde `dateTime` plaatsvindt gedurende de voorgaande maand volgens de huidige datum en tijd op het systeem. Houd er rekening mee dat deze functie onwaar retourneert als een waarde wordt doorgegeven die in de huidige maand valt.

-   `dateTime`: Een `date`\-, `datetime`\- of `datetimezone`\-waarde die moet worden geëvalueerd.


## Examples

### Example #1
Vaststellen of de maand vóór de huidige systeemtijd binnen de vorige maand valt.
```powerquery
Date.IsInPreviousMonth(Date.AddMonths(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
