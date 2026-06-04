---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


Retorna una taula de navegació que conté els contenidors que s'han trobat al compte especificat des d'un dipòsit d'emmagatzematge de l'Azure.


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Remarks

Retorna una taula de navegació que conté una fila per a cada contenidor que hi ha a l'URL del compte, `account`, des d'un dipòsit d'emmagatzematge de l'Azure. Cada fila conté un enllaç als BLOBS del contenidor. Es pot especificar el valor `options` per controlar les opcions següents:

-   `BlockSize` : Nombre de bytes que s'han de llegir abans d'esperar el consumidor de dades. El valor per defecte és de 4 MB.
-   `RequestSize` : Nombre de bytes que cal intentar llegir en una sola sol·licitud d'HTTP al servidor. El valor per defecte és de 4 MB.
-   `ConcurrentRequests` : L'opció ConcurrentRequests admet la descàrrega més ràpida de les dades mitjançant l'especificació del nombre de sol·licituds que es realitzaran en paral·lel, amb el cost de l'ús de la memòria. La memòria necessària és (ConcurrentRequest \* RequestSize). El valor per defecte és de 16.



## Category
Accessing data
