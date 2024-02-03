---
title: Date.IsInNextNYears
---

# Date.IsInNextNYears


## Description

Hiermee wordt aangegeven of deze datum plaatsvindt gedurende de volgende jaren volgens de huidige datum en tijd op het systeem. Houd er rekening mee dat deze functie onwaar retourneert als een waarde wordt doorgegeven die in het huidige jaar valt.


## Syntax

```powerquery
Date.IsInNextNYears(
    dateTime as any,
    years as number
) as logical
```


## Details

Hiermee wordt aangegeven of de opgegeven datetime-waarde <code>dateTime</code> plaatsvindt gedurende de volgende jaren volgens de huidige datum en tijd op het systeem. Houd er rekening mee dat deze functie onwaar retourneert als een waarde wordt doorgegeven die in het huidige jaar valt.      <ul>      <li><code>dateTime</code>: Een <code>date</code>-, <code>datetime</code>- of <code>datetimezone</code>-waarde die moet worden geëvalueerd.</li>      <li><code>years</code>: Het aantal jaren.</li>      </ul>


## Examples

### Example #1 
Bepalen of het jaar na de huidige systeemtijd plaatsvindt in de volgende twee jaar.
```powerquery
Date.IsInNextNYears(Date.AddYears(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
