---
title: SparkPost.NavTable
---

# SparkPost.NavTable



## Syntax

```powerquery
SparkPost.NavTable(
    DaysToAggregate as number
) as table
```


## Details

Recupere las tablas integradas expuestas por el conector de SparkPost con los datos acumulados durante el número de días especificado por el usuario. Cuando actualice estas tablas o realice llamadas a la API de SparkPost con este conector, tenga en cuenta que la API de SparkPost tiene un límite de frecuencia de API estricto. Si el servidor de SparkPost devuelve un código de estado 429, significa que ha alcanzado el límite de frecuencia, por lo que deberá esperar unos minutos antes de realizar más llamadas. Al elegir un valor para el parámetro Número de días, tenga en cuenta que la API solo almacena 6 meses de datos.


