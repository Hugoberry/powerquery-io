---
title: Webtrends.KeyMetrics
---

# Webtrends.KeyMetrics


Returnerer en tabel med en oversigt over Webtrends-målepunkter.


## Syntax

```powerquery
Webtrends.KeyMetrics(
    ProfileId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Remarks

Foretager et kald til Webtrends KeyMetrics-slutpunktet og returnerer alle data som en tabel.


## Examples

### Example #1 
Udtrækker en tabel med en oversigt over målepunkter for lejer 98765 inden for de seneste 30 dage
```powerquery
Webtrends.KeyMetrics("98765")
```

Result: 
```powerquery
En tabel med en oversigt over målepunkter
```



