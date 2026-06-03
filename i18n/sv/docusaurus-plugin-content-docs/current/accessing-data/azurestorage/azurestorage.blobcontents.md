---
title: AzureStorage.BlobContents
---

# AzureStorage.BlobContents


Returnerar innehållet i den angivna blobben från Azure Storage-valvet.


## Syntax

```powerquery
AzureStorage.BlobContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Returnerar innehållet i blobben på URL:en `url` från ett Azure Storage-valv. `options` kan anges för att styra följande alternativ:

-   `BlockSize` : Antal byte som ska läsas innan de väntar på datakonsumenten. Standardvärdet är 4 MB.
-   `RequestSize` : Antal byte som ska försöka läsas i en enskild HTTP-begäran till servern. Standardvärdet är 4 MB.
-   `ConcurrentRequests` : ConcurrentRequests-alternativet stöder snabbare nedladdning av data genom att ange antalet begäranden som ska göras parallellt till pris av minnesanvändning. Minnet som krävs är (ConcurrentRequest \* RequestSize). Standardvärdet är 16.



## Category
Accessing data
