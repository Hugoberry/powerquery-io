---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


Returnerar den angivna filens innehåll från ett Azure Data Lake Storage-filsystem.


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Returnerar innehållet i filen på URL:en `url` från ett Azure Data Lake Storage-filsystem. `options` kan anges för att styra följande alternativ:

-   `BlockSize` : Antal byte som ska läsas innan de väntar på datakonsumenten. Standardvärdet är 4 MB.
-   `RequestSize` : Antal byte som ska försöka läsas i en enskild HTTP-begäran till servern. Standardvärdet är 4 MB.
-   `ConcurrentRequests` : ConcurrentRequests-alternativet stöder snabbare nedladdning av data genom att ange antalet begäranden som ska göras parallellt till pris av minnesanvändning. Minnet som krävs är (ConcurrentRequest \* RequestSize). Standardvärdet är 16.



## Category
Accessing data
