---
title: Vertica.Database
---

# Vertica.Database


Importer des données de Vertica


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Retourne une table des schémas disponibles sur le serveur nommé par le paramètre `server` dans la base de données nommée par le paramètre `database`. Un paramètre d'enregistrement facultatif, `options`, peut être indiqué pour spécifier des propriétés supplémentaires. L'enregistrement peut contenir les champs suivants :

-   `ConnectionTimeout` : durée qui contrôle le délai d'attente avant l'abandon d'une tentative de connexion au serveur. La valeur par défaut dépend du pilote.
-   `CommandTimeout` : durée pendant laquelle la requête côté serveur est autorisée à s'exécuter avant son annulation. La valeur par défaut dépend du pilote.


## Examples

### Example #1
Lister les tables dans Vertica
```powerquery

```



