---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


## Description

Returnează un tabel de navigare ce conține documentele găsite în containerul specificat și subfolderele sale din Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Details

Returnează un tabel de navigare ce conține documentele găsite în containerul specificat și subfolderele sale la adresa URL a contului, <code>endpoint</code>, dintr-un sistem de fișiere Azure Data Lake Storage. <code>options</code> poate fi specificat pentru a controla următoarele opțiuni:    <ul><li><code>BlockSize</code> : Numărul de byți de citit &#238;nainte de a aștepta consumatorul de date. Valoarea implicită este de 4 MB.</li><li><code>RequestSize</code> : Numărul de byți pentru care se &#238;ncearcă citirea &#238;ntr-o singură solicitare HTTP către server. Valoarea implicită este de 4 MB.</li><li><code>ConcurrentRequests</code> : Opțiunea ConcurrentRequests acceptă descărcarea mai rapidă a datelor, preciz&#226;nd numărul de solicitări de efectuat &#238;n paralel, la costul utilizării memoriei. Memoria necesară este (ConcurrentRequest \* RequestSize). Valoarea implicită este 16.</li><li><code>HierarchicalNavigation</code> : O valoare logică (true/false) care controlează dacă fișierele sunt returnate &#238;ntr-o vizualizare de director arborescentă sau &#238;ntr-o listă plată. Valoarea implicită este false.</li></ul>



## Category
Accessing data
