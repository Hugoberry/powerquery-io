---
title: List.Average
---

# List.Average


## Description

Returnerer gennemsnittet af værdierne. Fungerer med værdier af typen number, date, datetime, datetimezone og duration.


## Syntax

```powerquery
List.Average(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

Returnerer gennemsnitsværdien for elementerne på listen <code>list</code>. Resultatet vises med samme datatype som værdierne på listen. Fungerer kun med værdier af typen number, date, time, datetime, datetimezone og duration.    Hvis listen er tom, returneres null.


## Examples

### Example #1 
Find gennemsnittet af listen over tal, &lt;code&gt;\{3, 4, 6}&lt;/code&gt;.
```powerquery
List.Average({3, 4, 6})
```

Result: 
```powerquery
4.333333333333333
```


### Example #2 
Find gennemsnittet af datoværdierne 1. januar 2011, 2. januar 2011 og 3. januar 2011.
```powerquery
List.Average({#date(2011, 1, 1), #date(2011, 1, 2), #date(2011, 1, 3)})
```

Result: 
```powerquery
#date(2011, 1, 2)
```




## Category
List.Averages
