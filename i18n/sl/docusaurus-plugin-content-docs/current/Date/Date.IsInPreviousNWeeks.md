---
title: Date.IsInPreviousNWeeks
---

# Date.IsInPreviousNWeeks


## Description

Označuje, ali se ta datum pojavi v prejšnjem številu tednov, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je &#34;false&#34;, če navedete vrednost, ki se pojavi v trenutnem tednu.


## Syntax

```powerquery
Date.IsInPreviousNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Details

Označuje, ali se navedena vrednost za "datetime" <code>dateTime</code> pojavi v prejšnjem številu tednov, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je "false", če navedete vrednost, ki se pojavi v trenutnem tednu.      <ul>      <li><code>dateTime</code>: vrednost za <code>date</code>, <code>datetime</code> ali <code>datetimezone</code>, ki bo ovrednotena.</li>      <li><code>weeks</code>: število tednov.</li>      </ul>


## Examples

### Example #1 
Določite, ali je teden pred trenutnim časom sistema v preteklih dveh tednih.
```powerquery
Date.IsInPreviousNWeeks(Date.AddDays(DateTime.FixedLocalNow(), -7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
