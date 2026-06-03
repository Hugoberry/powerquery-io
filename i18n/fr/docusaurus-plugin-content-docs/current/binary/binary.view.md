---
title: Binary.View
---

# Binary.View


Crée ou étend un fichier binaire avec des gestionnaires définis par l’utilisateur pour les opérations de requête et d’action.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Remarks

Renvoie la vue de `binary` où les fonctions spécifiées dans `handlers` sont utilisées au lieu du comportement par défaut d’une opération lorsque l’opération est appliquée à la vue.

Si `binary` est fourni, toutes les fonctions gestionnaires sont facultatives. Si `binary` n’est pas fourni, la fonction gestionnaire `GetStream` est requise. Si aucune fonction de gestionnaire n’est spécifiée pour une opération, le comportement par défaut de l’opération est appliqué à `binary` à la place (sauf dans le cas de `GetExpression`).

Les fonctions gestionnaires doivent renvoyer une valeur qui est sémantiquement équivalente au résultat de l’application de l’opération sur `binary` (ou la vue résultante dans le cas de `GetExpression`).

Si une fonction de gestionnaire génère une erreur, le comportement par défaut de l’opération est appliqué à la vue.

`Binary.View` peut être utilisé pour implémenter le repliement vers une source de données, c’est à dire la traduction de requêtes M en opérations spécifiques à la source (pour par exemple, pour télécharger une section d’un fichier).

Referez-vous à la documentation publiée du connecteur personnalisé Power Query pour une description plus complète de `Binary.View`.


## Examples

### Example #1
Créez une vue de base qui ne nécessite pas l’accès aux données pour déterminer la longueur.
```powerquery
Binary.View(
    null,
    [
        GetLength = () => 12,
        GetStream = () => Text.ToBinary("hello world!")
    ]
)
```

Result: 
```powerquery
Text.ToBinary("hello world!")
```




## Category
Binary
