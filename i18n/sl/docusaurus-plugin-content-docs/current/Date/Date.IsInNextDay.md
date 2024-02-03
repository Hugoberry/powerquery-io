---
title: Date.IsInNextDay
---

# Date.IsInNextDay


## Description

Označuje, ali se ta datum pojavi v naslednjem dnevu, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je &#34;false&#34;, če navedete vrednost, ki se pojavi v trenutnem dnevu.


## Syntax

```powerquery
Date.IsInNextDay(
    dateTime as any
) as logical
```


## Details

Označuje, ali se navedena vrednost za "datetime" <code>dateTime</code> pojavi v naslednjem dnevu, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je "false", če navedete vrednost, ki se pojavi v trenutnem dnevu.      <ul> <li><code>dateTime</code>: vrednost za <code>date</code>, <code>datetime "</code> ali <code>datetimezone</code>, ki bo ovrednotena.      </li>      </ul>


## Examples

### Example #1 
Določite, ali je dan po trenutnem času sistema v naslednjem dnevu.
```powerquery
Date.IsInNextDay(Date.AddDays(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date