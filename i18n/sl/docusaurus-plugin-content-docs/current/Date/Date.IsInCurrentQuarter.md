---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


## Description

Označuje, ali se ta datum pojavi v trenutnem četrtletju, kot določa trenutni datum in čas v sistemu.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Details

Označuje, ali se podana vrednost "datetime" <code>dateTime</code> pojavi v trenutnem četrtletju, kot določa trenutni datum in čas v sistemu.      <ul>      <li><code>dateTime</code>: vrednost <code>date</code>, <code>datetime</code> ali <code>datetimezone</code>, ki bo ovrednotena.</li>      </ul>


## Examples

### Example #1 
Določite, ali je trenutni čas sistema v trenutnem četrtletju.
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
