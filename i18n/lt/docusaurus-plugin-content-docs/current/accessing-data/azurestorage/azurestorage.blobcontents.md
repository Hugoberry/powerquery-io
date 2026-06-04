---
title: AzureStorage.BlobContents
---

# AzureStorage.BlobContents


Pateikiamas nurodyto didelio dvejetainio objekto turinys iš „Azure“ saugyklos.


## Syntax

```powerquery
AzureStorage.BlobContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Pateikiamas didelio dvejetainio objekto turinys URL adresu `url` iš „Azure“ saugyklos. Gali būti nurodyta `options`, kad būtų galima valdyti šias parinktis:

-   `BlockSize` : Baitų skaičius, kurį reikia perskaityti prieš laukiant duomenų vartotojo. Numatytoji reikšmė yra 4 MB.
-   `RequestSize` : Baitų skaičius, kurį reikia bandyti perskaityti vienoje HTTP užklausoje į serverį. Numatytoji reikšmė yra 4 MB.
-   `ConcurrentRequests` : Parinktis „ConcurrentRequests“ palaiko spartesnį duomenų atsisiuntimą nurodydama, kiek užklausų reikia atlikti lygiagrečiai atminties naudojimo sąskaita. Reikalinga atmintis – (ConcurrentRequest \* RequestSize). Numatytoji reikšmė yra 16.



## Category
Accessing data
