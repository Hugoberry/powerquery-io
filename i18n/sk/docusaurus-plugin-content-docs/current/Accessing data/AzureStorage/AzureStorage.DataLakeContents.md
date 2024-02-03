---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


## Description

Vráti obsah určeného súboru zo systému súborov Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Details

Vráti obsah súboru na URL adrese <code>url</code> zo systému súborov v služby Azure Data Lake Storage. Môžete určiť <code>options</code> na ovládanie týchto možností:    <ul><li><code>BlockSize</code> : Počet bajtov, ktor&#233; sa maj&#250; č&#237;tať pri čakan&#237; na spotrebiteľa &#250;dajov. Predvolen&#225; hodnota je 4 MB.</li><li><code>RequestSize</code> : Počet bajtov v r&#225;mci pokusu o č&#237;tanie jednej žiadosti HTTP na server. Predvolen&#225; hodnota je 4 MB.</li><li><code>ConcurrentRequests</code> : Možnosť ConcurrentRequests podporuje r&#253;chlejšie sťahovanie &#250;dajov zadan&#237;m počtu žiadost&#237;, ktor&#233; sa maj&#250; vykonať paralelne, č&#237;m sa využije naplno pam&#228;ť. Vyžaduje sa pam&#228;ť (ConcurrentRequest \* RequestSize). Predvolen&#225; hodnota je 16.</li></ul>



## Category
Accessing data
