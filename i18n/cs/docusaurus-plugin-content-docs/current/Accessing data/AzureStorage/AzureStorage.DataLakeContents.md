---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


## Description

Vrátí obsah souboru ze systému souborů Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Details

Vrátí obsah souboru na adrese URL <code>url</code> ze systému souborů Azure Data Lake Storage. Pomocí <code>options</code> je možné řídit následující možnosti:    <ul><li><code>BlockSize</code> : Počet bajtů, kter&#233; se maj&#237; přeč&#237;st, než se počk&#225; na př&#237;jemce dat. V&#253;choz&#237; hodnota je 4 MB.</li><li><code>RequestSize</code> : Počet bajtů, kter&#233; se maj&#237; zkusit přeč&#237;st z jednoho požadavku HTTP na server. V&#253;choz&#237; hodnota je 4 MB.</li><li><code>ConcurrentRequests</code> : Možnost ConcurrentRequests podporuje rychlejš&#237; stahov&#225;n&#237; dat t&#237;m, že umožňuje zadat počet požadavků, kter&#233; se provedou paralelně, za cenu vyšš&#237;ho využit&#237; paměti. Požadovan&#233; množstv&#237; paměti je (Souběžn&#233;Požadavky \* VelikostPožadavku). V&#253;choz&#237; hodnota je 16.</li></ul>



## Category
Accessing data
