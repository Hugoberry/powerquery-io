---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


## Description

Returnează un tabel de navigare ce conţine containerele găsite în contul specificat dintr-un seif de stocare Azure.


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Details

Returnează un tabel de navigare ce conţine un rând pentru fiecare container găsit la adresa URL a contului, <code>account</code>, dintr-un seif de stocare Azure. Fiecare rând conţine un link la bloburile containerului. <code>options</code> poate fi specificat pentru a controla următoarele opțiuni:    <ul><li><code>BlockSize</code> : Numărul de byți de citit &#238;nainte de a aștepta consumatorul de date. Valoarea implicită este de 4 MB.</li><li><code>RequestSize</code> : Numărul de byți pentru care se &#238;ncearcă citirea &#238;ntr-o singură solicitare HTTP către server. Valoarea implicită este de 4 MB.</li><li><code>ConcurrentRequests</code> : Opțiunea ConcurrentRequests acceptă descărcarea mai rapidă a datelor, preciz&#226;nd numărul de solicitări de efectuat &#238;n paralel, la costul utilizării memoriei. Memoria necesară este (ConcurrentRequest \* RequestSize). Valoarea implicită este 16.</li></ul>



## Category
Accessing data
