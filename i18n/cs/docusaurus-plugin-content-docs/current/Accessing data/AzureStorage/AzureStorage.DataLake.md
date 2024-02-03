---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


## Description

Vrátí navigační tabulku obsahující dokumenty nalezené v zadaném kontejneru a jeho podsložkách z Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Details

Vrátí navigační tabulku obsahující dokumenty nalezené v zadaném kontejneru a jeho podsložkách na adrese URL účtu <code>endpoint</code> ze systému souborů Azure Data Lake Storage. Pomocí <code>options</code> je možné řídit následující možnosti:    <ul><li><code>BlockSize</code> : Počet bajtů, kter&#233; se maj&#237; přeč&#237;st, než se počk&#225; na př&#237;jemce dat. V&#253;choz&#237; hodnota je 4 MB.</li><li><code>RequestSize</code> : Počet bajtů, kter&#233; se maj&#237; zkusit přeč&#237;st z jednoho požadavku HTTP na server. V&#253;choz&#237; hodnota je 4 MB.</li><li><code>ConcurrentRequests</code> : Možnost ConcurrentRequests podporuje rychlejš&#237; stahov&#225;n&#237; dat t&#237;m, že umožňuje zadat počet požadavků, kter&#233; se provedou paralelně, za cenu vyšš&#237;ho využit&#237; paměti. Požadovan&#233; množstv&#237; paměti je (Souběžn&#233;Požadavky \* VelikostPožadavku). V&#253;choz&#237; hodnota je 16.</li><li><code>HierarchicalNavigation</code> : Logick&#225; hodnota (true/false), kter&#225; určuje, jestli se soubory vr&#225;t&#237; ve stromov&#233;m zobrazen&#237; adres&#225;řů, nebo jako prost&#253; seznam. V&#253;choz&#237; hodnota je false.</li></ul>



## Category
Accessing data
