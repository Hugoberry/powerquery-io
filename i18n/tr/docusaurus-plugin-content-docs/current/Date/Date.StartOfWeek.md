---
title: Date.StartOfWeek
---

# Date.StartOfWeek


## Description

Haftanın başlangıcını döndürür.


## Syntax

```powerquery
Date.StartOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

<code>dateTime</code> içeren hafta başlangıcını döndürür.      <code>dateTime</code>, bir <code>date</code>, <code>datetime</code> veya <code>datetimezone</code> değeri olmalıdır.


## Examples

### Example #1 
11 Ekim 2011 Salı için haftanın başlangıcını bulun.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32))
```

Result: 
```powerquery
// Sunday, October 9th, 2011
#datetime(2011, 10, 9, 0, 0, 0)
```


### Example #2 
Pazartesiyi haftanın başlangıcı olarak kullanarak 11 Ekim 2011 Salı için haftanın başlangıcını bulun.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32), Day.Monday)
```

Result: 
```powerquery
// Monday, October 10th, 2011
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
