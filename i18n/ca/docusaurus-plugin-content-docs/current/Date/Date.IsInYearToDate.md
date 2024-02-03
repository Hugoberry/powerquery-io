---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


## Description

Indica si aquesta data té lloc durant l&#39;any actual i cau el dia actual o abans del dia actual, determinat per la data i hora actuals del sistema.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Details

Indica si el valor datetime <code>dateTime</code> donat té lloc durant l'any actual i cau el dia actual o abans del dia actual, determinat per la data i hora actuals del sistema.      <ul>      <li><code>dateTime</code>: un valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> que s'ha d'avaluar.</li>      </ul>


## Examples

### Example #1 
Determina si l&#39;hora del sistema actual és en aquest any fins ara.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
