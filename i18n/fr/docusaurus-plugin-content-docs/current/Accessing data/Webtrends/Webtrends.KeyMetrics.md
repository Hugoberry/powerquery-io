---
title: Webtrends.KeyMetrics
---

# Webtrends.KeyMetrics


## Description

Retourne une table avec les mesures Webtrends clés.


## Syntax

```powerquery
Webtrends.KeyMetrics(
    ProfileId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Details

Effectue un appel au point de terminaison Webtrends KeyMetrics et retourne toutes les données sous la forme d'une table.


## Examples

### Example #1 
Extrait une table de mesures clés pour le client 98765 au cours des 30 derniers jours
```powerquery
Webtrends.KeyMetrics("98765")
```

Result: 
```powerquery
Table de mesures clés
```



