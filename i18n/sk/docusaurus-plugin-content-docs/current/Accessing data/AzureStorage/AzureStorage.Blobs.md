---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


## Description

Vráti navigačnú tabuľku obsahujúcu kontajnery nachádzajúce sa v zadanom konte z trezora ukladacieho priestoru platformy Azure.


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Details

Vráti navigačnú tabuľku obsahujúcu riadok pre každý kontajner nachádzajúci sa na URL adrese konta <code>account</code> z trezora Azure Storage. Každý riadok obsahuje prepojenie na objekty BLOB kontajnera. Môžete určiť <code>options</code> na ovládanie týchto možností:    <ul><li><code>BlockSize</code> : Počet bajtov, ktor&#233; sa maj&#250; č&#237;tať pri čakan&#237; na spotrebiteľa &#250;dajov. Predvolen&#225; hodnota je 4 MB.</li><li><code>RequestSize</code> : Počet bajtov v r&#225;mci pokusu o č&#237;tanie jednej žiadosti HTTP na server. Predvolen&#225; hodnota je 4 MB.</li><li><code>ConcurrentRequests</code> : Možnosť ConcurrentRequests podporuje r&#253;chlejšie sťahovanie &#250;dajov zadan&#237;m počtu žiadost&#237;, ktor&#233; sa maj&#250; vykonať paralelne, č&#237;m sa využije naplno pam&#228;ť. Vyžaduje sa pam&#228;ť (ConcurrentRequest \* RequestSize). Predvolen&#225; hodnota je 16.</li></ul>



## Category
Accessing data
