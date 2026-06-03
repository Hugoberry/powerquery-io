---
title: List.MaxN
---

# List.MaxN


Retourne les valeurs maximales dans la liste. Le nombre de valeurs à retourner, ou une condition de filtre doit être spécifié.


## Syntax

```powerquery
List.MaxN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Remarks

Retourne la ou les valeurs maximales dans la liste spécifiée. Après le tri des lignes, des paramètres facultatifs peuvent être précisés pour filtrer davantage le résultat.

-   `list` : La liste de valeurs.
-   `countOrCondition` : spécifie le nombre de valeurs à retourner ou une condition de filtre. Si un nombre est spécifié, une liste d’un maximum de `countOrCondition` éléments dans l’ordre décroissant est retournée. Si une condition est spécifiée, la liste retournée inclut tous les éléments qui répondent à cette condition.
-   `comparisonCriteria` : (facultatif) Fonction utilisée pour transformer les valeurs avant qu’elles ne soient comparées. Si ce paramètre est `null`, les valeurs sont comparées sans transformation.
-   `includeNulls` : (facultatif) Indique si `null` valeurs de la liste doivent être incluses dans la détermination de l’élément maximal. La valeur par défaut est `true`.


## Examples

### Example #1
Recherchez les 5 valeurs les plus élevées dans la liste spécifiée.
```powerquery
List.MaxN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{8, 7, 5, 4, 3}
```


### Example #2
Recherchez les mots comportant plus de 3 caractères.
```powerquery
List.MaxN(
    {"boy", "dog", "pony", "cat", "rabbit", "bat"},
    each Text.Length(_) > 3
)
```

Result: 
```powerquery
{"rabbit", "pony"}
```


### Example #3
Trouvez les trois dates les plus récentes dans une liste de dates allemandes.
```powerquery
let
    Source = {"12.02.2024", "15.05.2025", "10.10.2021", "16.01.2025", "30.12.2022"},
    MaxDate = List.MaxN(Source, 3, each Date.FromText(_, [Culture = "de-DE"]))
in
    MaxDate
```

Result: 
```powerquery
{
    "15.05.2025",
    "16.01.2025",
    "12.02.2024"
}
```




## Category
List.Ordering
