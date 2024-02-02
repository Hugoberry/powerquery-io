---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


## Description

Importer des données depuis HDInsight Interactive Query


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Retourne une liste de tables depuis HDInsight Interactive Query spécifié par la <code>base de données</code> sur le <code>serveur</code> HDInsight Interactive Query. Vous pouvez spécifier un numéro de port avec le serveur, en le séparant avec le signe deux-points. Vous pouvez spécifier un paramètre <code>options</code> facultatif pour contrôler les options suivantes :<ul>        <li><code>ConnectionTimeout</code> : durée qui contrôle le temps d'attente avant l'abandon de la tentative de connexion au serveur. La valeur par défaut dépend du pilote.</li>        <li><code>CommandTimeout</code> : durée qui contrôle le temps pendant lequel la requête côté serveur est autorisée à s'exécuter avant d'être annulée. La valeur par défaut dépend du pilote.</li></ul>Le paramètre <code>options</code> est spécifié sous la forme [option1 = valeur1, option2 = valeur2...].


