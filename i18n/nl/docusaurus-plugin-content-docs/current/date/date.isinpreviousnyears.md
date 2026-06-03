---
title: Date.IsInPreviousNYears
---

# Date.IsInPreviousNYears


Hiermee wordt aangegeven of deze datum plaatsvindt gedurende de voorgaande jaren volgens de huidige datum en tijd op het systeem. Houd er rekening mee dat deze functie onwaar retourneert als een waarde wordt doorgegeven die in het huidige jaar valt.


## Syntax

```powerquery
Date.IsInPreviousNYears(
    dateTime as any,
    years as number
) as logical
```


## Remarks

Hiermee wordt aangegeven of de opgegeven datetime-waarde `dateTime` plaatsvindt gedurende de voorgaande jaren volgens de huidige datum en tijd op het systeem. Houd er rekening mee dat deze functie onwaar retourneert als een waarde wordt doorgegeven die in het huidige jaar valt.

-   `dateTime`: Een `date`\-, `datetime`\- of `datetimezone`\-waarde die moet worden geëvalueerd.
-   `years`: Het aantal jaren.


## Examples

### Example #1
Bepalen of het jaar voor de huidige systeemtijd plaatsvindt in de vorige twee jaar.
```powerquery
Date.IsInPreviousNYears(Date.AddYears(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
