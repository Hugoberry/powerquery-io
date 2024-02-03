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


## Details

Aquesta funció es pot utilitzar per trucar a qualsevol dels extrems de "Llistes" que ofereix l'API de SparkPost v1. Quan feu trucades a l'API de SparkPost utilitzant aquesta funció, tingueu en compte que l'API de SparkPost té un límit de velocitat estricte. Si veieu que es retorna el codi d'estat 429 des del servidor de SparkPost, significa que heu assolit el límit de velocitat i haureu d'esperar una estona per fer més trucades.


## Examples

### Example #1 
Retorna una taula amb una única columna emplenada amb dades d&#39;un dels extrems de &#34;Llistes&#34; de l&#39;API de SparkPost v1 (consulteu la documentació de l&#39;SparkPost per obtenir més informació).
```powerquery
Source = SparkPost.GetList("metrics/campaigns")
```

Result: 
```powerquery
Json.Document
```



