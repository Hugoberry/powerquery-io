---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


## Description

Vraća navigacionu tabelu koja sadrži kontejnere pronađene na navedenom nalogu iz Azure bezbednog skladišta.


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Details

Vraća tabelu za navigaciju koja sadrži red za svaki kontejner pronađen na URL adresi naloga, <code>account</code>, iz Azure bezbednog skladišta. Svaki red sadrži vezu ka blob objektima kontejnera. <code>options</code> se može navesti radi kontrole sledećih opcija:    <ul><li><code>BlockSize</code> : Broj bajtova koje treba pročitati pre čekanja na korisnika podataka. Podrazumevana vrednost je 4 MB.</li><li><code>RequestSize</code> : Broj bajtova čije čitanje treba pokušati u jednom HTTP zahtevu koji se uputi serveru. Podrazumevana vrednost je 4 MB.</li><li><code>ConcurrentRequests</code> : Opcija ConcurrentRequests podržava brže preuzimanje podataka time što navodi broj zahteva koje treba uputiti istovremeno, nezavisno od opterećenja memorije. Potrebna memorija je (ConcurrentRequest \* RequestSize). Podrazumevana vrednost je 16.</li></ul>



## Category
Accessing data
