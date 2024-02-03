---
title: Webtrends.KeyMetrics
---

# Webtrends.KeyMetrics


## Description

Atgriež tabulu ar galveno Webtrends metriku.


## Syntax

```powerquery
Webtrends.KeyMetrics(
    ProfileId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Details

Izsauc Webtrends galapunktu KeyMetrics un atgriež visus datus tabulas formā.


## Examples

### Example #1 
Atgādā tabulu, kurā norādīta nomnieka 98765 galvenā metrika pēdējās 30 dienās
```powerquery
Webtrends.KeyMetrics("98765")
```

Result: 
```powerquery
Galvenās metrikas tabula
```



