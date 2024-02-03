---
title: DateTime.IsInNextSecond
---

# DateTime.IsInNextSecond


## Description

Označuje, ali se ta datetime pojavi v naslednji sekundi, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je &#34;false&#34;, če navedete vrednost, ki se pojavi v trenutni sekundi.


## Syntax

```powerquery
DateTime.IsInNextSecond(
    dateTime as any
) as logical
```


## Details

Označuje, ali se navedena vrednost za "datetime" <code>dateTime</code> pojavi v naslednji sekundi, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je "false", če navedete vrednost, ki se pojavi v trenutni sekundi.      <ul>      <li><code>dateTime</code>: vrednost za <code>datetime</code> ali <code>datetimezone</code>, ki bo ovrednotena.</li>      </ul>


## Examples

### Example #1 
Določite, ali je sekunda po trenutnem sistemskem času v naslednji sekundi.
```powerquery
DateTime.IsInNextSecond(DateTime.FixedLocalNow() + #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
