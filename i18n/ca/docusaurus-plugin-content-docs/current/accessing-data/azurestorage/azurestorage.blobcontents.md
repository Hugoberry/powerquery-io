---
title: AzureStorage.BlobContents
---

# AzureStorage.BlobContents


Retorna el contingut del BLOB especificat a partir d'un dipòsit d'emmagatzematge de l'Azure.


## Syntax

```powerquery
AzureStorage.BlobContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Retorna el contingut del BLOB de l'URL, `url`, des d'un dipòsit d'emmagatzematge de l'Azure. Es pot especificar el valor `options` per controlar les opcions següents:

-   `BlockSize` : Nombre de bytes que s'han de llegir abans d'esperar el consumidor de dades. El valor per defecte és de 4 MB.
-   `RequestSize` : Nombre de bytes que cal intentar llegir en una sola sol·licitud d'HTTP al servidor. El valor per defecte és de 4 MB.
-   `ConcurrentRequests` : L'opció ConcurrentRequests admet la descàrrega més ràpida de les dades mitjançant l'especificació del nombre de sol·licituds que es realitzaran en paral·lel, amb el cost de l'ús de la memòria. La memòria necessària és (ConcurrentRequest \* RequestSize). El valor per defecte és de 16.



## Category
Accessing data
