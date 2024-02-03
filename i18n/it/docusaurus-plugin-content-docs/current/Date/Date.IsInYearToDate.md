---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


## Description

Indica se la data rientra nell&#39;anno corrente e se cade in corrispondenza del giorno corrente o prima, come determinato dalla data e dall&#39;ora correnti del sistema.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Details

Indica se il valore specificato datetime <code>dateTime</code> rientra nell'anno corrente e se cade in corrispondenza del giorno corrente o prima, come determinato dalla data e dall'ora correnti del sistema.      <ul>      <li><code>dateTime</code>: valore <code>date</code>, <code>datetime</code> o <code>datetimezone</code> da valutare.</li>      </ul>


## Examples

### Example #1 
Determina se l&#39;ora di sistema corrente cade da inizio anno a oggi.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
