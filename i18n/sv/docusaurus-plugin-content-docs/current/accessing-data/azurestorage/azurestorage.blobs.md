---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


Returnerar en navigeringstabell som innehåller de containrar som påträffats i det angivna kontot från ett Azure Storage-valv.


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Remarks

Returnerar en navigeringstabell som innehåller en rad för varje container som hittats i kontots URL, `account`, från ett Azure Storage-valv. Varje rad innehåller en länk till containerblobarna. `options` kan anges för att styra följande alternativ:

-   `BlockSize` : Antal byte som ska läsas innan de väntar på datakonsumenten. Standardvärdet är 4 MB.
-   `RequestSize` : Antal byte som ska försöka läsas i en enskild HTTP-begäran till servern. Standardvärdet är 4 MB.
-   `ConcurrentRequests` : ConcurrentRequests-alternativet stöder snabbare nedladdning av data genom att ange antalet begäranden som ska göras parallellt till pris av minnesanvändning. Minnet som krävs är (ConcurrentRequest \* RequestSize). Standardvärdet är 16.



## Category
Accessing data
