---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


Vrne tabelo za krmarjenje, ki vsebuje vsebnike, najdene v določenem računu iz trezorja shrambe Azure.


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Remarks

Vrne tabelo za krmarjenje, ki vsebuje vrstico vsakega vsebnika, najdenega na URL-ju računa (`account`), iz trezorja shrambe Azure. Vsaka vrstica vsebuje povezavo na zbirke dvojiških podatkov vsebnikov. `options` lahko določite za nadzor teh možnosti:

-   `BlockSize` : Število bajtov, ki jih je treba prebrati pred čakanjem na uporabnika podatkov. Privzeta vrednost je 4 MB.
-   `RequestSize` : Število bajtov za poskus branja v eni zahtevi HTTP za strežnik. Privzeta vrednost je 4 MB.
-   `ConcurrentRequests` : Možnost"ConcurrentRequests"podpira hitrejše prenose podatkov tako, da navede število zahtev, ki jih je mogoče izvesti vzporedno na račun uporabe pomnilnika. Zahtevan je pomnilnik (ConcurrentRequest \* RequestSize). Privzeta vrednost je 16.



## Category
Accessing data
