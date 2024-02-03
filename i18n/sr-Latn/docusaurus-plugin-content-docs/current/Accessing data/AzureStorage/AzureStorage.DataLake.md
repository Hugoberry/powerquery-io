---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


## Description

Vraća navigacionu tabelu koja sadrži dokumente pronađene u navedenom kontejneru i njegovim potfasciklama iz usluge Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Details

Vraća tabelu za navigaciju koja sadrži dokumente pronađene u navedenom kontejneru i njegovim potfasciklama na URL adresi naloga, <code>endpoint</code>, iz Azure Data Lake Storage sistema datoteka. <code>options</code> se može navesti radi kontrole sledećih opcija:    <ul><li><code>BlockSize</code> : Broj bajtova koje treba pročitati pre čekanja na korisnika podataka. Podrazumevana vrednost je 4 MB.</li><li><code>RequestSize</code> : Broj bajtova čije čitanje treba pokušati u jednom HTTP zahtevu koji se uputi serveru. Podrazumevana vrednost je 4 MB.</li><li><code>ConcurrentRequests</code> : Opcija ConcurrentRequests podržava brže preuzimanje podataka time što navodi broj zahteva koje treba uputiti istovremeno, nezavisno od opterećenja memorije. Potrebna memorija je (ConcurrentRequest \* RequestSize). Podrazumevana vrednost je 16.</li><li><code>HierarchicalNavigation</code> : Logika (tačno/netačno) koja kontroliše da li se datoteke vraćaju u prikazu direktorijuma u vidu stabla ili kao obična lista. Podrazumevana vrednost je „netačno“.</li></ul>



## Category
Accessing data
