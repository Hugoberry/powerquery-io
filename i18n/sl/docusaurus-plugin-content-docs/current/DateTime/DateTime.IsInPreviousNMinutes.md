---
title: DateTime.IsInPreviousNMinutes
---

# DateTime.IsInPreviousNMinutes


## Description

Označuje, ali se ta datetime pojavi v prejšnjem številu minut, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je &#34;false&#34;, če navedete vrednost, ki se pojavi v trenutni minuti.


## Syntax

```powerquery
DateTime.IsInPreviousNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Details

Označuje, ali se navedena vrednost za "datetime" <code>dateTime</code> pojavi v prejšnjem številu minut, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je "false", če navedete vrednost, ki se pojavi v trenutni minuti.      <ul>      <li><code>dateTime</code>: vrednost za <code>date</code> ali <code>datetimezone</code>, ki bo ovrednotena.</li>      <li><code>minutes</code>: število minut.</li>      </ul>


## Examples

### Example #1 
Določite, ali je minuta pred trenutnim sistemskim časom v prejšnjih dveh minutah.
```powerquery
DateTime.IsInPreviousNMinutes(DateTime.FixedLocalNow() - #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
