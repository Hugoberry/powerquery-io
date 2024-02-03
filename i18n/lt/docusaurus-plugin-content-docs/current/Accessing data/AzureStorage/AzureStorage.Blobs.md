---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


## Description

Pateikiama naršymo lentelė, kurioje yra konteineriai, rasti nurodytame „Azure“ saugyklos abonemente.


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Details

Pateikiama naršymo lentelė, kurioje yra po eilutę kiekvienam konteineriui, rastam „Azure“ saugyklos paskyros URL (<code>account</code>). Kiekvienoje eilutėje yra konteineryje esančių didelių dvejetainių objektų saitas. Gali būti nurodyta <code>options</code>, kad būtų galima valdyti šias parinktis:    <ul><li><code>BlockSize</code> : Baitų skaičius, kurį reikia perskaityti prieš laukiant duomenų vartotojo. Numatytoji reikšmė yra 4 MB.</li><li><code>RequestSize</code> : Baitų skaičius, kurį reikia bandyti perskaityti vienoje HTTP užklausoje į serverį. Numatytoji reikšmė yra 4 MB.</li><li><code>ConcurrentRequests</code> : Parinktis „ConcurrentRequests“ palaiko spartesnį duomenų atsisiuntimą nurodydama, kiek užklausų reikia atlikti lygiagrečiai atminties naudojimo sąskaita. Reikalinga atmintis – (ConcurrentRequest \* RequestSize). Numatytoji reikšmė yra 16.</li></ul>



## Category
Accessing data
