---
title: Webtrends.KeyMetrics
---

# Webtrends.KeyMetrics


## Description

Devuelve una tabla con las métricas clave de Webtrends.


## Syntax

```powerquery
Webtrends.KeyMetrics(
    ProfileId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Details

Realiza una llamada al punto de conexión de Webtrends KeyMetrics y devuelve todos los datos en forma de tabla.


## Examples

### Example #1 
Extrae una tabla de métricas clave para el inquilino 98765 en los últimos 30 días
```powerquery
Webtrends.KeyMetrics("98765")
```

Result: 
```powerquery
Una tabla de métricas clave
```



