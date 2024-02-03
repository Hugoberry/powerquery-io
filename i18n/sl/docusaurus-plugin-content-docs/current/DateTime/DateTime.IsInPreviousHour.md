---
title: DateTime.IsInPreviousHour
---

# DateTime.IsInPreviousHour


## Description

Označuje, ali se ta datetime pojavi v prejšnji uri, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je &#34;false&#34;, če navedete vrednost, ki se pojavi v trenutni uri.


## Syntax

```powerquery
DateTime.IsInPreviousHour(
    dateTime as any
) as logical
```


## Details

Označuje, ali se navedena vrednost za "datetime" <code>dateTime</code> pojavi v prejšnji uri, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je "false", če navedete vrednost, ki se pojavi v trenutni uri.      <ul>      <li><code>dateTime</code>: vrednost za <code>datetime</code> ali <code>datetimezone</code>, ki bo ovrednotena.</li>      </ul>


## Examples

### Example #1 
Določite, ali je ura pred trenutnim sistemskim časom v prejšnji uri.
```powerquery
DateTime.IsInPreviousHour(DateTime.FixedLocalNow() - #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
