---
title: Webtrends.KeyMetrics
---

# Webtrends.KeyMetrics


## Description

Vráti tabuľku s kľúčovou metrikou zo služby Webtrends.


## Syntax

```powerquery
Webtrends.KeyMetrics(
    ProfileId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Details

Uskutoční volanie do koncového bodu kľúčovej metriky služby Webtrends a vráti všetky údaje ako tabuľku.


## Examples

### Example #1 
Stiahne tabuľku s kľúčovou metrikou pre nájomníka 98765 za posledných 30 dní
```powerquery
Webtrends.KeyMetrics("98765")
```

Result: 
```powerquery
Tabuľka s kľúčovou metrikou
```



