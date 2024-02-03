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

Recupere as táboas integradas expostas polo conector de SparkPost con datos acumulados durante o número de días especificado polo usuario. Cando actualice estas táboas ou faga chamadas á API SparkPost mediante este conector, teña en conta que a API SparkPost ten un límite de taxa de API estrito. Se o servidor SparkPost devolve un código de estado 429, significa que acadou o límite de taxa e terá que agardar uns intres antes de realizar máis chamadas. Cando escolla un valor para o parámetro Número de días, teña en conta que a API só almacena 6 meses de datos.


