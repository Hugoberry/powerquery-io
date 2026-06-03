---
title: DateTime.IsInNextNSeconds
---

# DateTime.IsInNextNSeconds


Hiermee wordt aangegeven of deze datetime plaatsvindt gedurende de volgende seconden volgens de huidige datum en tijd op het systeem. Houd er rekening mee dat deze functie onwaar retourneert als een waarde wordt doorgegeven die in de huidige seconde valt.


## Syntax

```powerquery
DateTime.IsInNextNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Remarks

Hiermee wordt aangegeven of de opgegeven datetime-waarde `dateTime` plaatsvindt gedurende de volgende seconden volgens de huidige datum en tijd op het systeem. Houd er rekening mee dat deze functie onwaar retourneert als een waarde wordt doorgegeven die in de huidige seconde valt.

-   `dateTime`: Een `datetime`\- of `datetimezone`\-waarde die moet worden geëvalueerd.
-   `seconds`: Het aantal seconden.


## Examples

### Example #1
Bepalen of de seconde na de huidige systeemtijd plaatsvindt in de volgende twee seconden.
```powerquery
DateTime.IsInNextNSeconds(DateTime.FixedLocalNow() + #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
