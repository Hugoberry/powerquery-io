---
title: Date.IsInNextNMonths
---

# Date.IsInNextNMonths


## Description

Označuje, ali se ta datum pojavi v naslednjem številu mesecev, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je &#34;false&#34;, če navedete vrednost, ki se pojavi v trenutnem mesecu.


## Syntax

```powerquery
Date.IsInNextNMonths(
    dateTime as any,
    months as number
) as logical
```


## Details

Označuje, ali se navedena vrednost za "datetime" <code>dateTime</code> pojavi v naslednjem številu mesecev, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je "false", če navedete vrednost, ki se pojavi v trenutnem mesecu.      <ul>      <li><code>dateTime</code>: vrednost za <code>date</code>, <code>datetime</code> ali <code>datetimezone</code>, ki bo ovrednotena.</li>      <li><code>months</code>: število mesecev.</li>      </ul>


## Examples

### Example #1 
Določite, ali je mesec po trenutnem času sistema v naslednjih dveh mesecih.
```powerquery
Date.IsInNextNMonths(Date.AddMonths(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
