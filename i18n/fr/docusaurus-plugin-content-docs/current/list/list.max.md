---
title: List.Max
---

# List.Max


Retourne la valeur maximale ou la valeur par défaut pour une liste vide.


## Syntax

```powerquery
List.Max(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Remarks

Retourne l’élément maximal dans la liste ou la valeur par défaut facultative si la liste est vide.

-   `list` : La liste de valeurs.
-   `default` : (Facultatif) Valeur à retourner si la liste est vide.
-   `comparisonCriteria` : (facultatif) Fonction utilisée pour transformer les valeurs avant qu’elles ne soient comparées. Si ce paramètre est `null`, les valeurs sont comparées sans transformation.
-   `includeNulls` : (facultatif) Indique si `null` valeurs de la liste doivent être incluses dans la détermination de l’élément maximal. La valeur par défaut est `true`.


## Examples

### Example #1
Recherchez la valeur maximale dans la liste spécifiée.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2
Trouvez la valeur maximale dans la liste spécifiée ou retournez -1 si elle est vide.
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```


### Example #3
Trouvez l’élément d’une liste de valeurs textuelles qui est le dernier par ordre alphabétique. Si la liste est vide, retournez « none ».
```powerquery
let
    Source = {"boy", "dog", "girl", "zebra", "cat", "mouse", "rabbit"},
    MaxText = List.Max(Source, "none")
in
    MaxText
```

Result: 
```powerquery
"zebra"
```


### Example #4
Trouvez la date la plus récente dans une liste de dates allemandes. Si la liste est vide, retournez le 1er janvier 2000.
```powerquery
let
    Source = {"12.02.2024", "15.05.2025", "10.10.2021", "16.01.2025", "30.12.2022"},
    MaxDate = List.Max(Source, #date(2000, 1, 1), each Date.FromText(_, [Culture = "de-DE"]))
in
    MaxDate
```

Result: 
```powerquery
"15.05.2025"
```




## Category
List.Ordering
