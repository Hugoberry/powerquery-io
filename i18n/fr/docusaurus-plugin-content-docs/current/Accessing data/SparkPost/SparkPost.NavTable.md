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

Récupère les tables intégrées exposées par le connecteur SparkPost avec des données agrégées pendant le nombre de jours spécifié par l'utilisateur. Quand vous actualisez ces tables ou passez des appels à l'API SparkPost à l'aide de ce connecteur, gardez à l'esprit que l'API SparkPost a un débit maximal d'API strict. Si le code d'état 429 est retourné par le serveur SparkPost, vous avez atteint le débit maximal et devez attendre quelques instants avant de passer d'autres appels. Quand vous choisissez une valeur pour le paramètre Nombre de jours, notez que l'API stocke uniquement l'équivalent de 6 mois de données.


