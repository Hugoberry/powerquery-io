---
title: DateTime.IsInPreviousNSeconds
---

# DateTime.IsInPreviousNSeconds


## Description

Označuje, ali se ta datetime pojavi v prejšnjem številu sekund, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je &#34;false&#34;, če navedete vrednost, ki se pojavi v trenutni sekundi.


## Syntax

```powerquery
DateTime.IsInPreviousNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Details

Označuje, ali se navedena vrednost za "datetime" <code>dateTime</code> pojavi v prejšnjem številu sekund, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je "false", če navedete vrednost, ki se pojavi v trenutni sekundi.      <ul>      <li><code>dateTime</code>: vrednost za <code>datetime</code> ali <code>datetimezone</code>, ki bo ovrednotena.</li>      <li><code>seconds</code>: število sekund.</li>      </ul>


## Examples

### Example #1 
Določite, ali je sekunda pred trenutnim sistemskim časom v prejšnjih dveh sekundah.
```powerquery
DateTime.IsInPreviousNSeconds(DateTime.FixedLocalNow() - #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
