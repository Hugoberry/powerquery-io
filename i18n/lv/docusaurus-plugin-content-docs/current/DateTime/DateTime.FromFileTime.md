---
title: DateTime.FromFileTime
---

# DateTime.FromFileTime


## Description

Izveido datetime vērtību no 64 bitu gara skaitļa.


## Syntax

```powerquery
DateTime.FromFileTime(
    fileTime as number
) as datetime
```


## Details

Izveido <code>datetime</code> vērtību no vērtības <code>fileTime</code> un konvertē to vietējā laika joslā. Vērtība filetime ir Windows faila laika vērtība, kas ataino 100 nanosekunžu intervālu skaitu, kuri ir pagājuši kopš m.ē. 1601. gada 1. janvāra pusnakts, 24:00. (C.E.), Universālais koordinētais laiks (UTC).


## Examples

### Example #1 
Konvertējiet &lt;code&gt;129876402529842245&lt;/code&gt; par datetime vērtību.
```powerquery
DateTime.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetime(2012, 7, 24, 14, 50, 52.9842245)
```




## Category
DateTime
