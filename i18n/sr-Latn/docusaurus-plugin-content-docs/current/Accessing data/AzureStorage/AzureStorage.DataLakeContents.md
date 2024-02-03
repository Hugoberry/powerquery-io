---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


## Description

Vraća sadržaj navedene datoteke iz Azure Data Lake Storage sistema datoteka.


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Details

Vraća sadržaj datoteke na URL adresi, <code>url</code>, iz Azure Data Lake Storage sistema datoteka. <code>options</code> se može navesti radi kontrole sledećih opcija:    <ul><li><code>BlockSize</code> : Broj bajtova koje treba pročitati pre čekanja na korisnika podataka. Podrazumevana vrednost je 4 MB.</li><li><code>RequestSize</code> : Broj bajtova čije čitanje treba pokušati u jednom HTTP zahtevu koji se uputi serveru. Podrazumevana vrednost je 4 MB.</li><li><code>ConcurrentRequests</code> : Opcija ConcurrentRequests podržava brže preuzimanje podataka time što navodi broj zahteva koje treba uputiti istovremeno, nezavisno od opterećenja memorije. Potrebna memorija je (ConcurrentRequest \* RequestSize). Podrazumevana vrednost je 16.</li></ul>



## Category
Accessing data
