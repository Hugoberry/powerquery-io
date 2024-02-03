---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


## Description

Označuje, ali se ta datum pojavi v trenutnem letu, kot določa trenutni datum in čas v sistemu.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Details

Označuje, ali se podana vrednost "datetime" <code>dateTime</code> pojavi v trenutnem letu, kot določa trenutni datum in čas v sistemu.      <ul>      <li><code>dateTime</code>: vrednost <code>date</code>, <code>datetime</code> ali <code>datetimezone</code>, ki bo ovrednotena.</li>      </ul>


## Examples

### Example #1 
Določite, ali je trenutni čas sistema v trenutnem letu.
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
