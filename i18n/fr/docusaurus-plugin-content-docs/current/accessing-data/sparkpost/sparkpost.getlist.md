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

Cette fonction peut être utilisée pour appeler un des points de terminaison "Listes" offerts par l'API SparkPost v1. Quand vous passez des appels à l'API SparkPost à l'aide de cette fonction, gardez à l'esprit que l'API SparkPost a un débit maximal d'API strict. Si le code d'état 429 est retourné par le serveur SparkPost, vous avez atteint le débit maximal et devez attendre quelques instants avant de passer d'autres appels.


## Examples

### Example #1
Retourne une table avec une seule colonne renseignée avec les données d'un des points de terminaison "Listes" de l'API SparkPost v1 (consultez la documentation SparkPost pour plus de détails).
```powerquery
Source = SparkPost.GetList("metrics/campaigns")
```

Result: 
```powerquery
Json.Document
```



