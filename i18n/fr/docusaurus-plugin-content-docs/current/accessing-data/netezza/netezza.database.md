---
title: Netezza.Database
---

# Netezza.Database


Importe des données depuis une base de données IBM Netezza.


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Retourne une table des tables, des vues et des fonctions stockées Netezza à partir de la base de données du serveur Netezza `base de données` sur le serveur `serveur`. Le port peut éventuellement être spécifié avec le serveur, séparé par le signe deux-points. Vous pouvez spécifier des `options` sous forme de paramètres d'enregistrement facultatifs pour gérer les options suivantes :

-   `CreateNavigationProperties` : Valeur logique (true/false) qui définit s'il faut générer des propriétés de navigation sur les valeurs retournées (la valeur par défaut est true)
-   `HierarchicalNavigation` : Valeur logique (true/false) qui définit s'il faut afficher les tables regroupées par leur nom de schéma (la valeur par défaut est false)
-   `ConnectionTimeout` : Durée qui contrôle le délai d'attente avant d'abandonner une tentative de connexion au serveur. La valeur par défaut dépend du pilote.
-   `CommandTimeout` : Durée qui contrôle le temps pendant lequel la requête côté serveur est autorisée à s'exécuter avant d'être annulée. La valeur par défaut dépend du pilote.
-   `NormalizeDatabaseName` : Valeur logique (true/false) qui définit s'il faut normaliser le nom de base de données et le mettre en majuscules ou s'il faut l'interpréter littéralement (la valeur par défaut est true).

Le paramètre d'enregistrement est spécifié sous la forme \[option1 = valeur1, option2 = value2...\].


## Examples

### Example #1
Répertorie les tables dans un projet IBM Netezza.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



