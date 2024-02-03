---
title: Webtrends.KeyMetrics
---

# Webtrends.KeyMetrics


## Description

Devolve unha táboa con medidas chave de Webtrends.


## Syntax

```powerquery
Webtrends.KeyMetrics(
    ProfileId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Details

Realiza unha chamada ao extremo de Webtrends KeyMetrics e devolve todos os datos como unha táboa.


## Examples

### Example #1 
Extrae unha táboa de medidas chave para o arrendatario 98765 nos últimos 30 días
```powerquery
Webtrends.KeyMetrics("98765")
```

Result: 
```powerquery
Unha táboa de medidas chave
```



