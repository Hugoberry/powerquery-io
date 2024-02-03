---
title: List.Sum
---

# List.Sum


## Description

Tiek atgriezta saraksta vienumu summa.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

Tiek atgriezta to saraksta <code>list</code> vērtību summa, kas nav Null.  Ja visas saraksta vērtības ir Null, tiek atgriezta vērtība Null.


## Examples

### Example #1 
Iegūstiet sarakstā &lt;code&gt;\{1, 2, 3}&lt;/code&gt; ietverto skaitļu summu.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
