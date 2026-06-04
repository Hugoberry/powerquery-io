---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


Torna una taula de navegació que conté els documents que s'han trobat al contenidor especificat i a les seves subcarpetes des de l'Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Remarks

Retorna una taula de navegació que conté els documents que s'han trobat al contenidor especificat i a les seves subcarpetes de l'URL del compte, `endpoint`, des d'un sistema de fitxers de l'Azure Data Lake Storage. Es pot especificar el valor `options` per controlar les opcions següents:

-   `BlockSize` : Nombre de bytes que s'han de llegir abans d'esperar el consumidor de dades. El valor per defecte és de 4 MB.
-   `RequestSize` : Nombre de bytes que cal intentar llegir en una sola sol·licitud d'HTTP al servidor. El valor per defecte és de 4 MB.
-   `ConcurrentRequests` : L'opció ConcurrentRequests admet la descàrrega més ràpida de les dades mitjançant l'especificació del nombre de sol·licituds que es realitzaran en paral·lel, amb el cost de l'ús de la memòria. La memòria necessària és (ConcurrentRequest \* RequestSize). El valor per defecte és de 16.
-   `HierarchicalNavigation` : Operador lògic ("true" o "false") que controla si es retornen els fitxers en una visualització de directoris de tipus arbre o en una llista plana. El valor per defecte és "false".



## Category
Accessing data
