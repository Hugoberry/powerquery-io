---
title: Table.View
---

# Table.View


Crée ou étend une table avec des gestionnaires définis par l'utilisateur pour les opérations de requête et d'action.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Remarks

Renvoie une vue de `table` l'endroit où les fonctions spécifiées dans `handlers` sont utilisées à la place du comportement par défaut d'une opération lorsque l'opération est appliquée à la vue.

Si `table` est fourni, toutes les fonctions de gestionnaire sont facultatives. Si `table` elle n'est pas fournie, les fonctions de gestion `GetType` et `GetRows` sont requises. Si aucune fonction de gestionnaire n'est spécifiée pour une opération, le comportement par défaut de l'opération est appliqué à `table` la place (sauf dans le cas de `GetExpression`).

Les fonctions de gestionnaire doivent renvoyer un valeur qui est sémantiquement équivalente au résultat de l'application de l'opération sur `table` (ou la vue résultante dans le cas de `GetExpression`).

Si une fonction de gestionnaire génère une erreur, le comportement par défaut de l'opération est appliquée à la vue.

`Table.View` peut être utilisé pour implémenter le repliement vers une source de données – la traduction de requêtes M en requêtes spécifiques à la source (par exemple, pour créer des instructions T-SQL à partir de requêtes M).

Référez-vous à la documentation publiée sur le connecteur personnalisé Power Query pour une description plus complète de `Table.View`.


## Examples

### Example #1
Créez une vue de base qui ne nécessite pas d'accéder aux lignes afin de déterminer le type ou le nombre de lignes.
```powerquery
Table.View(
    null,
    [
        GetType = () => type table [CustomerID = number, Name = text, Phone = nullable text],
        GetRows = () => Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
        GetRowCount = () => 1
    ]
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Table construction
