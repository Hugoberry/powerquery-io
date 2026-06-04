---
title: AzureStorage.BlobContents
---

# AzureStorage.BlobContents


Vrne vsebino navedene zbirke dvojiških podatkov iz trezorja shrambe Azure.


## Syntax

```powerquery
AzureStorage.BlobContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Vrne vsebino zbirke dvojiških podatkov na URL-ju `url` iz trezorja shrambe Azure. `options` lahko določite za nadzor teh možnosti:

-   `BlockSize` : Število bajtov, ki jih je treba prebrati pred čakanjem na uporabnika podatkov. Privzeta vrednost je 4 MB.
-   `RequestSize` : Število bajtov za poskus branja v eni zahtevi HTTP za strežnik. Privzeta vrednost je 4 MB.
-   `ConcurrentRequests` : Možnost"ConcurrentRequests"podpira hitrejše prenose podatkov tako, da navede število zahtev, ki jih je mogoče izvesti vzporedno na račun uporabe pomnilnika. Zahtevan je pomnilnik (ConcurrentRequest \* RequestSize). Privzeta vrednost je 16.



## Category
Accessing data
