---
title: AzureStorage.BlobContents
---

# AzureStorage.BlobContents


Retourne le contenu de l'objet blob spécifié à partir d'un coffre de stockage Azure.


## Syntax

```powerquery
AzureStorage.BlobContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Retourne le contenu de l'objet blob à l'URL, `url`, à partir d'un coffre de stockage Azure. Vous pouvez spécifier `options` pour contrôler les options suivantes :

-   `BlockSize` : Nombre d'octets à lire avant d'attendre le consommateur de données. La valeur par défaut est 4 Mo.
-   `RequestSize` : Nombre d'octets à lire dans une requête HTTP unique sur le serveur. La valeur par défaut est 4 Mo.
-   `ConcurrentRequests` : L'option ConcurrentRequests spécifie le nombre de demandes à effectuer en parallèle, ce qui permet d'accélérer le téléchargement des données au détriment de l'utilisation de la mémoire. La mémoire nécessaire est égale à (ConcurrentRequest \* RequestSize). La valeur par défaut est 16.



## Category
Accessing data
