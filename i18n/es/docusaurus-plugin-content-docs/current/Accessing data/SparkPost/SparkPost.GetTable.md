---
title: SparkPost.GetTable
---

# SparkPost.GetTable


Devuelve una tabla de métricas disponibles de la API de SparkPost v1


## Syntax

```powerquery
SparkPost.GetTable(
    DaysToAggregate as number,
    MetricColumns as text,
    NonMetricColumns as text,
    Path as text
) as table
```


## Remarks

Esta función puede utilizarse para recuperar datos de un punto de conexión de "Métricas" concreto de la API SparkPost v1. Cuando actualice estas tablas o realice llamadas a la API de SparkPost con este conector, tenga en cuenta que la API de SparkPost tiene un límite de frecuencia de API estricto. Si el servidor de SparkPost devuelve un código de estado 429, significa que ha alcanzado el límite de frecuencia y tendrá que esperar unos minutos antes de realizar más llamadas. Al elegir un valor para el parámetro Número de días, tenga en cuenta que la API solo almacena 6 meses de datos.


## Examples

### Example #1 
Recupera las métricas de entrega count_sent y count_rejected de los identificadores campaign_ids de los últimos tres días. 
```powerquery
Source = SparkPost.GetTable(3, "count_sent,count_rejected", "campaign_id", "metrics/deliverability/campaign")
```

Result: 
```powerquery
tabla
```



