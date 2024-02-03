---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


## Description

Pateikiama naršymo lentelė su dokumentais, rastais nurodytame konteineryje ir jo poaplankiuose „Azure Data Lake Storage“.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Details

Pateikiama naršymo lentelė su dokumentais, rastais nurodytame konteineryje ir jo poaplankiuose paskyros URL (<code>endpoint</code>) „Azure Data Lake Storage“ failų sistemoje. Gali būti nurodyta <code>options</code>, kad būtų galima valdyti šias parinktis:    <ul><li><code>BlockSize</code> : Baitų skaičius, kurį reikia perskaityti prieš laukiant duomenų vartotojo. Numatytoji reikšmė yra 4 MB.</li><li><code>RequestSize</code> : Baitų skaičius, kurį reikia bandyti perskaityti vienoje HTTP užklausoje į serverį. Numatytoji reikšmė yra 4 MB.</li><li><code>ConcurrentRequests</code> : Parinktis „ConcurrentRequests“ palaiko spartesnį duomenų atsisiuntimą nurodydama, kiek užklausų reikia atlikti lygiagrečiai atminties naudojimo sąskaita. Reikalinga atmintis – (ConcurrentRequest \* RequestSize). Numatytoji reikšmė yra 16.</li><li><code>HierarchicalNavigation</code> : Loginė reikšmė (true / false), kontroliuojanti, ar failai pateikiami kaip katalogo medžio rodinys, ar kaip plokščiasis sąrašas. Numatytoji reikšmė yra „false“.</li></ul>



## Category
Accessing data
