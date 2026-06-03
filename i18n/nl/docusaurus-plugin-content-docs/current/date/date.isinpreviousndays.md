---
title: Date.IsInPreviousNDays
---

# Date.IsInPreviousNDays


Hiermee wordt aangegeven of deze datum plaatsvindt gedurende de voorgaande dagen volgens de huidige datum en tijd op het systeem. Houd er rekening mee dat deze functie onwaar retourneert als een waarde wordt doorgegeven die in de huidige dag valt.


## Syntax

```powerquery
Date.IsInPreviousNDays(
    dateTime as any,
    days as number
) as logical
```


## Remarks

Hiermee wordt aangegeven of de opgegeven datetime-waarde `dateTime` plaatsvindt gedurende de voorgaande dagen volgens de huidige datum en tijd op het systeem. Houd er rekening mee dat deze functie onwaar retourneert als een waarde wordt doorgegeven die in de huidige dag valt.

-   `dateTime`: Een `date`\-, `datetime`\- of `datetimezone`\-waarde die moet worden geëvalueerd.
-   `days`: Het aantal dagen.


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
