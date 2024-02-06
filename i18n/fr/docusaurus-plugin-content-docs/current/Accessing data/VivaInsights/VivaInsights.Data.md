---
title: VivaInsights.Data
---

# VivaInsights.Data



## Syntax

```powerquery
VivaInsights.Data(
    scopeId as text,
    optional jobName as text,
    optional jobId as text,
    optional advancedParameters as record
) as table
```


## Remarks

Importez les données d'attribut et les métriques toutes les semaines à partir du service Analyse du temps de travail.


## Examples

### Example #1 
Retourne une table avec des attributs visibles et des métriques hebdomadaires pour chaque employé évalué dans la partition.
```powerquery
VivaInsights.Data("5f142ea5-c08a-eb02-de68-41dccdefb141")
```

Result: 
```powerquery
#table({"Query1"}, {{"PersonId""}, {"PID"}})
```



