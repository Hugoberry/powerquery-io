---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


## Description

Returnerar en navigeringstabell som innehåller de containrar som påträffats i det angivna kontot från ett Azure Storage-valv.


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Details

Returnerar en navigeringstabell som innehåller en rad för varje container som hittats i kontots URL, <code>account</code>, från ett Azure Storage-valv. Varje rad innehåller en länk till containerblobarna. <code>options</code> kan anges för att styra följande alternativ:    <ul><li><code>BlockSize</code> : Antal byte som ska l&#228;sas innan de v&#228;ntar p&#229; datakonsumenten. Standardv&#228;rdet &#228;r 4 MB.</li><li><code>RequestSize</code> : Antal byte som ska f&#246;rs&#246;ka l&#228;sas i en enskild HTTP-beg&#228;ran till servern. Standardv&#228;rdet &#228;r 4 MB.</li><li><code>ConcurrentRequests</code> : ConcurrentRequests-alternativet st&#246;der snabbare nedladdning av data genom att ange antalet beg&#228;randen som ska g&#246;ras parallellt till pris av minnesanv&#228;ndning. Minnet som kr&#228;vs &#228;r (ConcurrentRequest \* RequestSize). Standardv&#228;rdet &#228;r 16.</li></ul>



## Category
Accessing data
