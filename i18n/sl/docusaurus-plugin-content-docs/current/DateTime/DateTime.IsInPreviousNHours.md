---
title: DateTime.IsInPreviousNHours
---

# DateTime.IsInPreviousNHours


## Description

Označuje, ali se ta datetime pojavi v prejšnjem številu ur, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je &#34;false&#34;, če navedete vrednost, ki se pojavi v trenutni uri.


## Syntax

```powerquery
DateTime.IsInPreviousNHours(
    dateTime as any,
    hours as number
) as logical
```


## Details

Označuje, ali se navedena vrednost za "datetime" <code>dateTime</code> pojavi v prejšnjem številu ur, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je "false", če navedete vrednost, ki se pojavi v trenutni uri.      <ul>      <li><code>dateTime</code>: vrednost za <code>date</code> ali <code>datetimezone</code>, ki bo ovrednotena.</li>      <li><code>hours</code>: število ur.</li>      </ul>


## Examples

### Example #1 
Določite, ali je ura pred trenutnim sistemskim časom v prejšnjih dveh urah.
```powerquery
DateTime.IsInPreviousNHours(DateTime.FixedLocalNow() - #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
