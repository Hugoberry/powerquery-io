---
title: AzureStorage.Tables
---

# AzureStorage.Tables


Retourne une table de navigation avec les tables trouvées dans le compte spécifié à partir d'un coffre de stockage Windows Azure.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Remarks

Renvoie une table de navigation contenant une ligne pour chaque table trouvée à l'URL du compte, `account`, à partir d'un coffre de stockage Azure. Chaque ligne contient un lien vers la table Azure. Un paramètre d'enregistrement facultatif `options` peut être fourni pour spécifier des propriétés supplémentaires. L'enregistrement peut contenir les champs suivants :

-   `Timeout` : Durée qui contrôle le temps d’attente avant l’abandon de la demande envoyée au serveur. La valeur par défaut est propre à la source.



## Category
Accessing data
