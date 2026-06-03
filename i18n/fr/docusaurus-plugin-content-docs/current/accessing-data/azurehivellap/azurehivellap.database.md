---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


Importer des données depuis HDInsight Interactive Query


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Retourne une liste de tables depuis HDInsight Interactive Query spécifié par la `base de données` sur le `serveur` HDInsight Interactive Query. Vous pouvez spécifier un numéro de port avec le serveur, en le séparant avec le signe deux-points. Vous pouvez spécifier un paramètre `options` facultatif pour contrôler les options suivantes :

-   `ConnectionTimeout` : durée qui contrôle le temps d'attente avant l'abandon de la tentative de connexion au serveur. La valeur par défaut dépend du pilote.
-   `CommandTimeout` : durée qui contrôle le temps pendant lequel la requête côté serveur est autorisée à s'exécuter avant d'être annulée. La valeur par défaut dépend du pilote.

Le paramètre `options` est spécifié sous la forme \[option1 = valeur1, option2 = valeur2...\].


