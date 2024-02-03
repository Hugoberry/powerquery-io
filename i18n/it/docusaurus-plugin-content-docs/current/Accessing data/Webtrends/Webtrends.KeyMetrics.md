---
title: Webtrends.KeyMetrics
---

# Webtrends.KeyMetrics


## Description

Restituisce una tabella con le metriche chiave di Webtrends.


## Syntax

```powerquery
Webtrends.KeyMetrics(
    ProfileId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Details

Effettua una chiamata all'endpoint metriche chiave Webtrends e restituisce tutti i dati come una tabella.


## Examples

### Example #1 
Esegue il pull di una tabella di metriche chiave per il tenant 98765 negli ultimi 30 giorni
```powerquery
Webtrends.KeyMetrics("98765")
```

Result: 
```powerquery
Tabella con le metriche chiave
```



