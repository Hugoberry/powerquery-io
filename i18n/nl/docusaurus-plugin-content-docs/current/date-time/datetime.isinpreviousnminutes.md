---
title: DateTime.IsInPreviousNMinutes
---

# DateTime.IsInPreviousNMinutes


Hiermee wordt aangegeven of deze datetime plaatsvindt gedurende de voorgaande minuten volgens de huidige datum en tijd op het systeem. Houd er rekening mee dat deze functie onwaar retourneert als een waarde wordt doorgegeven die in de huidige minuut valt.


## Syntax

```powerquery
DateTime.IsInPreviousNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Remarks

Hiermee wordt aangegeven of de opgegeven datetime-waarde `dateTime` plaatsvindt gedurende de voorgaande minuten volgens de huidige datum en tijd op het systeem. Houd er rekening mee dat deze functie onwaar retourneert als een waarde wordt doorgegeven die in de huidige minuut valt.

-   `dateTime`: Een `datetime`\- of `datetimezone`\-waarde die moet worden geëvalueerd.
-   `minutes`: Het aantal minuten.


## Examples

### Example #1
Bepalen of de minuut vóór de huidige systeemtijd plaatsvindt in de vorige twee minuten.
```powerquery
DateTime.IsInPreviousNMinutes(DateTime.FixedLocalNow() - #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
