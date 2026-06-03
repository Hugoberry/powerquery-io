---
title: Date.IsInNextNMonths
---

# Date.IsInNextNMonths


Hiermee wordt aangegeven of deze datum plaatsvindt gedurende de volgende maanden volgens de huidige datum en tijd op het systeem. Houd er rekening mee dat deze functie onwaar retourneert als een waarde wordt doorgegeven die in de huidige maand valt.


## Syntax

```powerquery
Date.IsInNextNMonths(
    dateTime as any,
    months as number
) as logical
```


## Remarks

Hiermee wordt aangegeven of de opgegeven datetime-waarde `dateTime` plaatsvindt gedurende de volgende maanden volgens de huidige datum en tijd op het systeem. Houd er rekening mee dat deze functie onwaar retourneert als een waarde wordt doorgegeven die in de huidige maand valt.

-   `dateTime`: Een `date`\-, `datetime`\- of `datetimezone`\-waarde die moet worden geëvalueerd.
-   `months`: Het aantal maanden.


## Examples

### Example #1
Bepalen of de maand na de huidige systeemtijd plaatsvindt in de volgende twee maanden.
```powerquery
Date.IsInNextNMonths(Date.AddMonths(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
