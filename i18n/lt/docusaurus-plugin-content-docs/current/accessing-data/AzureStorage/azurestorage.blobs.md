---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


Pateikiama naršymo lentelė, kurioje yra konteineriai, rasti nurodytame „Azure“ saugyklos abonemente.


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Remarks

Pateikiama naršymo lentelė, kurioje yra po eilutę kiekvienam konteineriui, rastam „Azure“ saugyklos paskyros URL (`account`). Kiekvienoje eilutėje yra konteineryje esančių didelių dvejetainių objektų saitas. Gali būti nurodyta `options`, kad būtų galima valdyti šias parinktis:

-   `BlockSize` : Baitų skaičius, kurį reikia perskaityti prieš laukiant duomenų vartotojo. Numatytoji reikšmė yra 4 MB.
-   `RequestSize` : Baitų skaičius, kurį reikia bandyti perskaityti vienoje HTTP užklausoje į serverį. Numatytoji reikšmė yra 4 MB.
-   `ConcurrentRequests` : Parinktis „ConcurrentRequests“ palaiko spartesnį duomenų atsisiuntimą nurodydama, kiek užklausų reikia atlikti lygiagrečiai atminties naudojimo sąskaita. Reikalinga atmintis – (ConcurrentRequest \* RequestSize). Numatytoji reikšmė yra 16.



## Category
Accessing data
