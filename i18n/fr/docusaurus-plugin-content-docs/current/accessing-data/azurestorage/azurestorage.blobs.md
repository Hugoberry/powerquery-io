---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


Retourne une table de navigation contenant les conteneurs trouvés dans le compte spécifié à partir d'un coffre de stockage Azure.


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Remarks

Retourne une table de navigation contenant une ligne pour chaque conteneur trouvé pour l'URL du compte, `account`, à partir d'un coffre de stockage Azure. Chaque ligne contient un lien vers les objets blob du conteneur. Vous pouvez spécifier `options` pour contrôler les options suivantes :

-   `BlockSize` : Nombre d'octets à lire avant d'attendre le consommateur de données. La valeur par défaut est 4 Mo.
-   `RequestSize` : Nombre d'octets à lire dans une requête HTTP unique sur le serveur. La valeur par défaut est 4 Mo.
-   `ConcurrentRequests` : L'option ConcurrentRequests spécifie le nombre de demandes à effectuer en parallèle, ce qui permet d'accélérer le téléchargement des données au détriment de l'utilisation de la mémoire. La mémoire nécessaire est égale à (ConcurrentRequest \* RequestSize). La valeur par défaut est 16.



## Category
Accessing data
