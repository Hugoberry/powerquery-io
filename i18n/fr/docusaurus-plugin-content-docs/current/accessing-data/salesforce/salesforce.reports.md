---
title: Salesforce.Reports
---

# Salesforce.Reports


Retourne les rapports à partir du compte Salesforce.


## Syntax

```powerquery
Salesforce.Reports(
    optional loginUrl as text,
    optional options as record
) as table
```


## Remarks

Retourne les rapports sur le compte Salesforce fourni dans les informations d'identification. Le compte est connecté par le biais de l'environnement `loginUrl` fourni. Si aucun environnement n'est fourni, le compte se connecte à la production (https://login.salesforce.com). Vous pouvez indiquer un paramètre d'enregistrement facultatif, `options`, pour spécifier des propriétés supplémentaires. L'enregistrement peut contenir les champs suivants :

-   `ApiVersion` : Version de l'API Salesforce à utiliser pour cette requête. Si elle n'est pas spécifiée, la version 29.0 de l'API est utilisée.
-   `Timeout` : Durée qui contrôle le temps d’attente avant l’abandon de la demande envoyée au serveur. La valeur par défaut est propre à la source.



## Category
Accessing data
