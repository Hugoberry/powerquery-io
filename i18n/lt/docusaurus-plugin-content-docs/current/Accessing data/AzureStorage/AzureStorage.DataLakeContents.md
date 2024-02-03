---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


## Description

Pateikiamas iš „Azure Data Lake Storage“ failų sistemos gauto nurodyto failo turinys.


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Details

Pateikiamas failo turinys URL adresu <code>url</code> iš „Azure Data Lake Storage“ failų sistemos. Gali būti nurodyta <code>options</code>, kad būtų galima valdyti šias parinktis:    <ul><li><code>BlockSize</code> : Baitų skaičius, kurį reikia perskaityti prieš laukiant duomenų vartotojo. Numatytoji reikšmė yra 4 MB.</li><li><code>RequestSize</code> : Baitų skaičius, kurį reikia bandyti perskaityti vienoje HTTP užklausoje į serverį. Numatytoji reikšmė yra 4 MB.</li><li><code>ConcurrentRequests</code> : Parinktis „ConcurrentRequests“ palaiko spartesnį duomenų atsisiuntimą nurodydama, kiek užklausų reikia atlikti lygiagrečiai atminties naudojimo sąskaita. Reikalinga atmintis – (ConcurrentRequest \* RequestSize). Numatytoji reikšmė yra 16.</li></ul>



## Category
Accessing data
