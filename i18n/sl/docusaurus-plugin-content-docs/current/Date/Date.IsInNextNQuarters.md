---
title: Date.IsInNextNQuarters
---

# Date.IsInNextNQuarters


## Description

Označuje, ali se ta datum pojavi v naslednjem številu četrtletij, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je &#34;false&#34;, če navedete vrednost, ki se pojavi v trenutnem četrtletju.


## Syntax

```powerquery
Date.IsInNextNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Details

Označuje, ali se navedena vrednost za "datetime" <code>dateTime</code> pojavi v naslednjem številu četrtletij, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je "false", če navedete vrednost, ki se pojavi v trenutnem četrtletju.      <ul>      <li><code>dateTime</code>: vrednost za <code>date</code>, <code>datetime</code> ali <code>datetimezone</code>, ki bo ovrednotena.</li>      <li><code>quarters</code>: število četrtletij.</li>      </ul>


## Examples

### Example #1 
Določite, ali je četrtletje po trenutnem času sistema v naslednjih dveh četrtletjih.
```powerquery
Date.IsInNextNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
