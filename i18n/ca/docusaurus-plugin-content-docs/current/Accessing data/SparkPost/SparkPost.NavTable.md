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

Permet recuperar les taules integrades exposades pel connector de SparkPost amb dades agregades per a un nombre de dies especificat per l'usuari. Quan actualitzeu aquestes taules o feu trucades a l'API de SparkPost amb aquest connector, tingueu en compte que l'API de SparkPost té un límit de velocitat estricte. Si veieu que es retorna el codi d'estat 429 des del servidor de SparkPost, significa que heu assolit el límit de velocitat i haureu d'esperar una estona per fer més trucades. Quan trieu un valor per al paràmetre Nombre de dies, tingueu en compte que l'API només emmagatzema 6 mesos de dades.


