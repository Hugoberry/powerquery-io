---
title: Date.IsInPreviousQuarter
---

# Date.IsInPreviousQuarter


## Description

Označuje, ali se ta datum pojavi v prejšnjem četrtletju, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je &#34;false&#34;, če navedete vrednost, ki se pojavi v trenutnem četrtletju.


## Syntax

```powerquery
Date.IsInPreviousQuarter(
    dateTime as any
) as logical
```


## Details

Označuje, ali se navedena vrednost za "datetime" <code>dateTime</code> pojavi v prejšnjem četrtletju, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je "false", če navedete vrednost, ki se pojavi v trenutnem četrtletju.      <ul>      <li><code>dateTime</code>: vrednost za <code>date</code>, <code>datetime</code> ali <code>datetimezone</code>, ki bo ovrednotena.</li>      </ul>


## Examples

### Example #1 
Določite, ali je četrtletje pred trenutnim časom sistema v predhodnem četrtletju.
```powerquery
Date.IsInPreviousQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
