---
title: Vertica.Database
---

# Vertica.Database


## Description

Importer des données de Vertica


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Retourne une table des schémas disponibles sur le serveur nommé par le paramètre <code>server</code> dans la base de données nommée par le paramètre <code>database</code>.Un paramètre d'enregistrement facultatif, <code>options</code>, peut être indiqué pour spécifier des propriétés supplémentaires. L'enregistrement peut contenir les champs suivants :<ul>    <li><code>ConnectionTimeout</code> : durée qui contrôle le délai d'attente avant l'abandon d'une tentative de connexion au serveur. La valeur par défaut dépend du pilote.</li>    <li><code>CommandTimeout</code> : durée pendant laquelle la requête côté serveur est autorisée à s'exécuter avant son annulation. La valeur par défaut dépend du pilote.</li></ul>


## Examples

### Example #1 
Lister les tables dans Vertica
```powerquery

```



