---
title: Webtrends.KeyMetrics
---

# Webtrends.KeyMetrics


## Description

Vrátí tabulku s klíčovými metrikami Webtrends.


## Syntax

```powerquery
Webtrends.KeyMetrics(
    ProfileId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Details

Provede volání koncového bodu Webtrends KeyMetrics a vrátí všechna data jako tabulku.


## Examples

### Example #1 
Vrátí tabulku klíčových metrik pro tenanta 98765 za posledních 30 dní.
```powerquery
Webtrends.KeyMetrics("98765")
```

Result: 
```powerquery
Tabulka klíčových metrik
```



