---
title: SparkPost.GetList
---

# SparkPost.GetList



## Syntax

```powerquery
SparkPost.GetList(
    path as text
) as table
```


## Remarks

Esta función puede utilizarse para llamar a cualquiera de los extremos de "Listas" ofrecidos por la API SparkPost v1. Cuando realice llamadas a la API SparkPost con esta función, tenga en cuenta que la API SparkPost tiene un límite de frecuencia de API estricto. Si el servidor de SparkPost devuelve un código de estado 429, significa que ha alcanzado el límite de frecuencia y tendrá que esperar unos minutos antes de realizar más llamadas.


## Examples

### Example #1 
Devuelve una tabla con una sola columna rellena con los datos de uno de los extremos &#34;Listas&#34; de la API SparkPost v1 (consulte la documentación de SparkPost para obtener más detalles).
```powerquery
Source = SparkPost.GetList("metrics/campaigns")
```

Result: 
```powerquery
Json.Document
```



