---
title: Webtrends.KeyMetrics
---

# Webtrends.KeyMetrics


Returns a table with key Webtrends metrics.


## Syntax

```powerquery
Webtrends.KeyMetrics(
    ProfileId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Remarks

Makes a call to the Webtrends KeyMetrics endpoint and returns all data as a table.


## Examples

### Example #1 
Pulls a table of key metrics for tenant 98765 in last 30 days
```powerquery
Webtrends.KeyMetrics("98765")
```

Result: 
```powerquery
A table of key metrics
```



