---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


Retorna el contingut del fitxer especificat des d'un sistema de fitxers de l'Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Retorna el contingut del fitxer de l'adreça URL, `url`, des d'un sistema de fitxers de l'Azure Data Lake Storage. Es pot especificar el valor `options` per controlar les opcions següents:

-   `BlockSize` : Nombre de bytes que s'han de llegir abans d'esperar el consumidor de dades. El valor per defecte és de 4 MB.
-   `RequestSize` : Nombre de bytes que cal intentar llegir en una sola sol·licitud d'HTTP al servidor. El valor per defecte és de 4 MB.
-   `ConcurrentRequests` : L'opció ConcurrentRequests admet la descàrrega més ràpida de les dades mitjançant l'especificació del nombre de sol·licituds que es realitzaran en paral·lel, amb el cost de l'ús de la memòria. La memòria necessària és (ConcurrentRequest \* RequestSize). El valor per defecte és de 16.



## Category
Accessing data
