---
title: AzureStorage.BlobContents
---

# AzureStorage.BlobContents


## Description

Returnează conținutul blobului specificat dintr-un seif de stocare Azure.


## Syntax

```powerquery
AzureStorage.BlobContents(
    url as text,
    optional options as record
) as binary
```


## Details

Returnează conținutul blobului de la adresa URL, <code>url</code>, dintr-un seif de stocare Azure. <code>options</code> poate fi specificat pentru a controla următoarele opțiuni:    <ul><li><code>BlockSize</code> : Numărul de byți de citit &#238;nainte de a aștepta consumatorul de date. Valoarea implicită este de 4 MB.</li><li><code>RequestSize</code> : Numărul de byți pentru care se &#238;ncearcă citirea &#238;ntr-o singură solicitare HTTP către server. Valoarea implicită este de 4 MB.</li><li><code>ConcurrentRequests</code> : Opțiunea ConcurrentRequests acceptă descărcarea mai rapidă a datelor, preciz&#226;nd numărul de solicitări de efectuat &#238;n paralel, la costul utilizării memoriei. Memoria necesară este (ConcurrentRequest \* RequestSize). Valoarea implicită este 16.</li></ul>



## Category
Accessing data