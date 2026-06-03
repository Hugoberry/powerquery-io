---
title: Json.FromValue
---

# Json.FromValue


Produit une représentation JSON d'une valeur donnée.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Remarks

Produit une représentation JSON d’une valeur donnée `value` avec un codage de texte spécifié par `encoding`. Si `encoding` est omis, UTF8 est utilisé. Les valeurs sont représentées comme suit :

-   Les valeurs null, texte et logiques sont représentées par les types JSON correspondants
-   Les nombres sont représentés en tant que tels dans JSON, sauf que `#infinity`, `-#infinity` et `#nan` sont convertis en valeur null
-   Les listes sont représentées sous forme de tableaux JSON
-   Les enregistrements sont représentés sous forme d'objets JSON
-   Les tables sont représentées sous forme de tableaux d'objets
-   Les dates, heures, dates/heures, dates/fuseaux horaires et les durées sont représentés sous forme de texte ISO-8601
-   Les valeurs binaires sont représentées sous forme de texte codé en base 64
-   Les types et les fonctions génèrent une erreur


## Examples

### Example #1
Convertissez une valeur complexe en valeur JSON.
```powerquery
Text.FromBinary(Json.FromValue([A = {1, true, "3"}, B = #date(2012, 3, 25)]))
```

Result: 
```powerquery
"{""A"":[1,true,""3""],""B"":""2012-03-25""}"
```




## Category
Text.Conversions from and to text
