---
title: Webtrends.KeyMetrics
---

# Webtrends.KeyMetrics


## Description

Returnerar en tabell med Webtrends-statistiköversikt.


## Syntax

```powerquery
Webtrends.KeyMetrics(
    ProfileId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Details

Anropar Webtrends KeyMetrics-slutpunkten och returnerar alla data som en tabell.


## Examples

### Example #1 
Hämtar en statistiköversiktstabell för klient 98765 under de senaste 30 dagarna
```powerquery
Webtrends.KeyMetrics("98765")
```

Result: 
```powerquery
En statistiköversiktstabell
```



