---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


Retourne une table de navigation contenant les documents trouvés dans le conteneur spécifié et ses sous-dossiers à partir d&#39;Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Remarks

Retourne une table de navigation contenant les documents trouvés dans le conteneur spécifié et ses sous-dossiers à l'URL de compte, <code>endpoint</code>, à partir d'un système de fichiers Azure Data Lake Storage. Vous pouvez spécifier <code>options</code> pour contrôler les options suivantes :    <ul><li><code>BlockSize</code> : Nombre d&#39;octets &#224; lire avant d&#39;attendre le consommateur de donn&#233;es. La valeur par d&#233;faut est 4&#160;Mo.</li><li><code>RequestSize</code> : Nombre d&#39;octets &#224; lire dans une requ&#234;te HTTP unique sur le serveur. La valeur par d&#233;faut est 4&#160;Mo.</li><li><code>ConcurrentRequests</code> : L&#39;option ConcurrentRequests sp&#233;cifie le nombre de demandes &#224; effectuer en parall&#232;le, ce qui permet d&#39;acc&#233;l&#233;rer le t&#233;l&#233;chargement des donn&#233;es au d&#233;triment de l&#39;utilisation de la m&#233;moire. La m&#233;moire n&#233;cessaire est &#233;gale &#224; (ConcurrentRequest \* RequestSize). La valeur par d&#233;faut est&#160;16.</li><li><code>HierarchicalNavigation</code> : Valeur logique (true/false) qui contr&#244;le si les fichiers sont retourn&#233;s dans une vue de r&#233;pertoire de type arborescence ou dans une liste plate. La valeur par d&#233;faut est false.</li></ul>



## Category
Accessing data
