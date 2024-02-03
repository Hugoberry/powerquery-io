---
title: AzureStorage.BlobContents
---

# AzureStorage.BlobContents


## Description

Pateikiamas nurodyto didelio dvejetainio objekto turinys iš „Azure“ saugyklos.


## Syntax

```powerquery
AzureStorage.BlobContents(
    url as text,
    optional options as record
) as binary
```


## Details

Pateikiamas didelio dvejetainio objekto turinys URL adresu <code>url</code> iš „Azure“ saugyklos. Gali būti nurodyta <code>options</code>, kad būtų galima valdyti šias parinktis:    <ul><li><code>BlockSize</code> : Baitų skaičius, kurį reikia perskaityti prieš laukiant duomenų vartotojo. Numatytoji reikšmė yra 4 MB.</li><li><code>RequestSize</code> : Baitų skaičius, kurį reikia bandyti perskaityti vienoje HTTP užklausoje į serverį. Numatytoji reikšmė yra 4 MB.</li><li><code>ConcurrentRequests</code> : Parinktis „ConcurrentRequests“ palaiko spartesnį duomenų atsisiuntimą nurodydama, kiek užklausų reikia atlikti lygiagrečiai atminties naudojimo sąskaita. Reikalinga atmintis – (ConcurrentRequest \* RequestSize). Numatytoji reikšmė yra 16.</li></ul>



## Category
Accessing data
