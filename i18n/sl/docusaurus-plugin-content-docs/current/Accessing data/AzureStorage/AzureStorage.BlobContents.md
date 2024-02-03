---
title: AzureStorage.BlobContents
---

# AzureStorage.BlobContents


## Description

Vrne vsebino navedene zbirke dvojiških podatkov iz trezorja shrambe Azure.


## Syntax

```powerquery
AzureStorage.BlobContents(
    url as text,
    optional options as record
) as binary
```


## Details

Vrne vsebino zbirke dvojiških podatkov na URL-ju <code>url</code> iz trezorja shrambe Azure. <code>options</code> lahko določite za nadzor teh možnosti:    <ul><li><code>BlockSize</code> : Število bajtov, ki jih je treba prebrati pred čakanjem na uporabnika podatkov. Privzeta vrednost je 4 MB.</li><li><code>RequestSize</code> : Število bajtov za poskus branja v eni zahtevi HTTP za strežnik. Privzeta vrednost je 4 MB.</li><li><code>ConcurrentRequests</code> : Možnost &#187;ConcurrentRequests&#171; podpira hitrejše prenose podatkov tako, da navede število zahtev, ki jih je mogoče izvesti vzporedno na račun uporabe pomnilnika. Zahtevan je pomnilnik (ConcurrentRequest \* RequestSize). Privzeta vrednost je 16.</li></ul>



## Category
Accessing data
