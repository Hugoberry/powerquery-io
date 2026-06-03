---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


Retourne une table de navigation contenant les documents trouvés dans le conteneur spécifié et ses sous-dossiers à partir d'Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Remarks

Retourne une table de navigation contenant les documents trouvés dans le conteneur spécifié et ses sous-dossiers à l'URL de compte, `endpoint`, à partir d'un système de fichiers Azure Data Lake Storage. Vous pouvez spécifier `options` pour contrôler les options suivantes :

-   `BlockSize` : Nombre d'octets à lire avant d'attendre le consommateur de données. La valeur par défaut est 4 Mo.
-   `RequestSize` : Nombre d'octets à lire dans une requête HTTP unique sur le serveur. La valeur par défaut est 4 Mo.
-   `ConcurrentRequests` : L'option ConcurrentRequests spécifie le nombre de demandes à effectuer en parallèle, ce qui permet d'accélérer le téléchargement des données au détriment de l'utilisation de la mémoire. La mémoire nécessaire est égale à (ConcurrentRequest \* RequestSize). La valeur par défaut est 16.
-   `HierarchicalNavigation` : Valeur logique (true/false) qui contrôle si les fichiers sont retournés dans une vue de répertoire de type arborescence ou dans une liste plate. La valeur par défaut est false.



## Category
Accessing data
