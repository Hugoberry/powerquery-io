---
title: Webtrends.KeyMetrics
---

# Webtrends.KeyMetrics


## Description

A fő Webtrends-mérőszámokat tartalmazó táblát adja vissza.


## Syntax

```powerquery
Webtrends.KeyMetrics(
    ProfileId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Details

Hívást küld a Webtrends KeyMetrics-végpontra, és egy táblában adja vissza az összes adatot.


## Examples

### Example #1 
Lekéri a 98765-ös bérlő az elmúlt 30 napot felölelő, a fő mérőszámokat tartalmazó tábláját
```powerquery
Webtrends.KeyMetrics("98765")
```

Result: 
```powerquery
A fő mérőszámok táblája
```



