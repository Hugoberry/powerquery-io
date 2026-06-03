---
title: DateTime.IsInNextHour
---

# DateTime.IsInNextHour


Hiermee wordt aangegeven of deze datetime plaatsvindt gedurende het volgende uur volgens de huidige datum en tijd op het systeem. Houd er rekening mee dat deze functie onwaar retourneert als een waarde wordt doorgegeven die in het huidige uur valt.


## Syntax

```powerquery
DateTime.IsInNextHour(
    dateTime as any
) as logical
```


## Remarks

Hiermee wordt aangegeven of de opgegeven datetime-waarde `dateTime` plaatsvindt gedurende het volgende uur volgens de huidige datum en tijd op het systeem. Houd er rekening mee dat deze functie onwaar retourneert als een waarde wordt doorgegeven die in het huidige uur valt.

-   `dateTime`: Een `datetime`\- of `datetimezone`\-waarde die moet worden geëvalueerd.


## Examples

### Example #1
Bepalen of het uur na de huidige systeemtijd plaatsvindt in het volgende uur.
```powerquery
DateTime.IsInNextHour(DateTime.FixedLocalNow() + #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
