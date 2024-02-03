---
title: Date.IsInPreviousNYears
---

# Date.IsInPreviousNYears


## Description

Označuje, ali se ta datum pojavi v prejšnjem številu let, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je &#34;false&#34;, če navedete vrednost, ki se pojavi v trenutnem letu.


## Syntax

```powerquery
Date.IsInPreviousNYears(
    dateTime as any,
    years as number
) as logical
```


## Details

Označuje, ali se navedena vrednost za "datetime" <code>dateTime</code> pojavi v prejšnjem številu let, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je "false", če navedete vrednost, ki se pojavi v trenutnem letu.      <ul>      <li><code>dateTime</code>: vrednost za <code>date</code>, <code>datetime</code> ali <code>datetimezone</code>, ki bo ovrednotena.</li>      <li><code>years</code>: število let.</li>      </ul>


## Examples

### Example #1 
Določite, ali je leto pred trenutnim časom sistema v preteklih dveh letih.
```powerquery
Date.IsInPreviousNYears(Date.AddYears(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
