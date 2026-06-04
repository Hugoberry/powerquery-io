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

Non se pode usar esta función para chamar aos extremos de "Listas" fornecidos pola API SparkPost v1. Cando faga chamadas á API SparkPost con esta función, teña en conta que a API SparkPost ten un límite de taxa de API estrito. Se o servidor de SparkPost devolve un código de estado 429, significa que acadou o límite de taxa e terá que agardar uns intres antes de realizar máis chamadas.


## Examples

### Example #1
Devolve unha táboa cunha soa columna enchida con datos dun dos extremos "Listas" da API SparkPost v1 (consulte a documentación de SparkPost para obter máis información).
```powerquery
Source = SparkPost.GetList("metrics/campaigns")
```

Result: 
```powerquery
Json.Document
```



