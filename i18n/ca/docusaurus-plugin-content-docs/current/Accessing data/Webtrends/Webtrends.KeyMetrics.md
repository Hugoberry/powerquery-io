---
title: Webtrends.KeyMetrics
---

# Webtrends.KeyMetrics


## Description

Retorna una taula amb mètriques clau del Webtrends.


## Syntax

```powerquery
Webtrends.KeyMetrics(
    ProfileId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Details

Fa una trucada a l'extrem del Webtrends KeyMetrics i retorna totes les dades com a taula.


## Examples

### Example #1 
Extreu una taula de mètriques clau per a l&#39;inquilí 98765 els últims 30 dies
```powerquery
Webtrends.KeyMetrics("98765")
```

Result: 
```powerquery
Una taula de mètriques clau
```



