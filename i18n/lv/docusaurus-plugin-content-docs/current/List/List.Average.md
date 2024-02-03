---
title: List.Average
---

# List.Average


## Description

Tiek atgriezta norādīto vērtību vidējā vērtība. Var apstrādāt tipu number, date, datetime, datetimezone un duration vērtības.


## Syntax

```powerquery
List.Average(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

Tiek atgriezta saraksta <code>list</code> vienumu vidējā vērtība. Rezultāta datu tips atbilst saraksta vērtību datu tipam. Var apstrādāt tikai tipu number, date, time, datetime, datetimezone un duration vērtības.    Ja saraksts ir tukšs, tiek atgriezta vērtība Null.


## Examples

### Example #1 
Iegūstiet skaitļu saraksta &lt;code&gt;\{3, 4, 6}&lt;/code&gt; vidējo vērtību.
```powerquery
List.Average({3, 4, 6})
```

Result: 
```powerquery
4.333333333333333
```


### Example #2 
Iegūstiet šo tipa date vērtību vidējo vērtību: 2011. gada 1. janvāris, 2011. gada 2. janvāris un 2011. gada 3. janvāris.
```powerquery
List.Average({#date(2011, 1, 1), #date(2011, 1, 2), #date(2011, 1, 3)})
```

Result: 
```powerquery
#date(2011, 1, 2)
```




## Category
List.Averages
