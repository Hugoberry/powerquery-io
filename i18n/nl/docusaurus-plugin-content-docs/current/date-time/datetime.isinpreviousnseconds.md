---
title: DateTime.IsInPreviousNSeconds
---

# DateTime.IsInPreviousNSeconds


Hiermee wordt aangegeven of deze datetime plaatsvindt gedurende de voorgaande seconden volgens de huidige datum en tijd op het systeem. Houd er rekening mee dat deze functie onwaar retourneert als een waarde wordt doorgegeven die in de huidige seconde valt.


## Syntax

```powerquery
DateTime.IsInPreviousNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Remarks

Hiermee wordt aangegeven of de opgegeven datetime-waarde `dateTime` plaatsvindt gedurende de voorgaande seconden volgens de huidige datum en tijd op het systeem. Houd er rekening mee dat deze functie onwaar retourneert als een waarde wordt doorgegeven die in de huidige seconde valt.

-   `dateTime`: Een `datetime`\- of `datetimezone`\-waarde die moet worden geëvalueerd.
-   `seconds`: Het aantal seconden.


## Examples

### Example #1
Bepalen of de seconde vóór de huidige systeemtijd plaatsvindt in de vorige twee seconden.
```powerquery
DateTime.IsInPreviousNSeconds(DateTime.FixedLocalNow() - #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
