---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


Returnerar en navigeringstabell som innehåller de dokument som hittades i den angivna containern och dess undermappar från Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Remarks

Returnerar en navigeringstabell som innehåller de dokument som hittades i den angivna containern och dess undermappar på kontots URL `endpoint` från ett Azure Data Lake Storage-filsystem. `options` kan anges för att styra följande alternativ:

-   `BlockSize` : Antal byte som ska läsas innan de väntar på datakonsumenten. Standardvärdet är 4 MB.
-   `RequestSize` : Antal byte som ska försöka läsas i en enskild HTTP-begäran till servern. Standardvärdet är 4 MB.
-   `ConcurrentRequests` : ConcurrentRequests-alternativet stöder snabbare nedladdning av data genom att ange antalet begäranden som ska göras parallellt till pris av minnesanvändning. Minnet som krävs är (ConcurrentRequest \* RequestSize). Standardvärdet är 16.
-   `HierarchicalNavigation` : Ett logiskt värde (sant/falskt) som styr om filerna returneras i en trädlik katalogvy eller som en plan lista. Standardvärdet är falskt.



## Category
Accessing data
