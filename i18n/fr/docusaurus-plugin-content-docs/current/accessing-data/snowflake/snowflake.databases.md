---
title: Snowflake.Databases
---

# Snowflake.Databases


Importez des données à partir de l'entrepôt Snowflake Computing.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Remarks

Retourne une table listant les tables de l'`entrepôt` Snowflake Computing situé sur le `serveur`. Vous pouvez spécifier un paramètre d'enregistrement facultatif, `options`, pour contrôler les options suivantes :

-   `Role` : valeur texte à utiliser comme nom de rôle pour la connexion.
-   `CreateNavigationProperties` : valeur logique (true/false) qui définit s'il faut générer des propriétés de navigation sur les valeurs retournées (la valeur par défaut est true).
-   `ConnectionTimeout` : nombre de secondes pendant lesquelles attendre des réponses réseau de Snowflake.
-   `CommandTimeout` : nombre de secondes pendant lesquelles attendre l'exécution de la requête.


## Examples

### Example #1
Répertoriez les tables d'un entrepôt Snowflake.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



