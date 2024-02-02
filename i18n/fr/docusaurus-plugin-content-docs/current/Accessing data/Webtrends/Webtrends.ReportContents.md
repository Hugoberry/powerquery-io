---
title: Webtrends.ReportContents
---

# Webtrends.ReportContents


## Description

Retourne une table avec le contenu du rapport de Webtrends.


## Syntax

```powerquery
Webtrends.ReportContents(
    ProfileId as text,
    ReportId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Details

Effectue un appel au point de terminaison de génération de rapports Webtrends donné et retourne toutes les données sous la forme d'une table.


## Examples

### Example #1 
Effectue un appel au point de terminaison du rapport des visiteurs Webtrends pour les données des 30 derniers jours
```powerquery
Webtrends.ReportContents("98765", "xPcmTDDP0P6")
```

Result: 
```powerquery
Table de données des visiteurs
```



