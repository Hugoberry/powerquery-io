---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


Importer des données à partir d&#39;un LLAP Hive


## Syntax

```powerquery
ApacheHiveLLAP.Database(
    server as text,
    database as text,
    thriftTransport as number,
    optional options as record
) as table
```


## Remarks

Retourne une liste de tables à partir du LLAP Hive spécifié par la <code>base de données</code> sur le <code>serveur</code> LLAP Hive en utilisant le <code>protocole</code> sélectionné. Vous pouvez spécifier un numéro de port avec le serveur, en le séparant avec le signe deux-points. Le protocole de transport Thrift est un type énuméré avec les valeurs " Standard ", " HTTP ". Vous pouvez spécifier un paramètre <code>options</code> facultatif pour contrôler les options suivantes :<ul>        <li><code>ConnectionTimeout</code> : Durée qui contrôle le temps d'attente avant l'abandon de la tentative de connexion au serveur. La valeur par défaut dépend du pilote.</li>        <li><code>CommandTimeout</code> : Durée qui contrôle le temps pendant lequel la requête côté serveur est autorisée à s'exécuter avant d'être annulée. La valeur par défaut dépend du pilote.</li></ul>Le paramètre <code>options</code> est spécifié sous la forme [option1 = valeur1, option2 = valeur2...].


