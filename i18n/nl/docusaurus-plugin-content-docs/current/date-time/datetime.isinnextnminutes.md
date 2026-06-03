---
title: DateTime.IsInNextNMinutes
---

# DateTime.IsInNextNMinutes


Hiermee wordt aangegeven of deze datetime plaatsvindt gedurende de volgende minuten volgens de huidige datum en tijd op het systeem. Houd er rekening mee dat deze functie onwaar retourneert als een waarde wordt doorgegeven die in de huidige minuut valt.


## Syntax

```powerquery
DateTime.IsInNextNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Remarks

Hiermee wordt aangegeven of de opgegeven datetime-waarde `dateTime` plaatsvindt gedurende de volgende minuten volgens de huidige datum en tijd op het systeem. Houd er rekening mee dat deze functie onwaar retourneert als een waarde wordt doorgegeven die in de huidige minuut valt.

-   `dateTime`: Een `datetime`\- of `datetimezone`\-waarde die moet worden geëvalueerd.
-   `minutes`: Het aantal minuten.


## Examples

### Example #1
Bepalen of de minuut na de huidige systeemtijd plaatsvindt in de volgende twee minuten.
```powerquery
DateTime.IsInNextNMinutes(DateTime.FixedLocalNow() + #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
