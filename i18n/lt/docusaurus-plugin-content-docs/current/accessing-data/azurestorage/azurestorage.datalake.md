---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


Pateikiama naršymo lentelė su dokumentais, rastais nurodytame konteineryje ir jo poaplankiuose „Azure Data Lake Storage“.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Remarks

Pateikiama naršymo lentelė su dokumentais, rastais nurodytame konteineryje ir jo poaplankiuose paskyros URL (`endpoint`) „Azure Data Lake Storage“ failų sistemoje. Gali būti nurodyta `options`, kad būtų galima valdyti šias parinktis:

-   `BlockSize` : Baitų skaičius, kurį reikia perskaityti prieš laukiant duomenų vartotojo. Numatytoji reikšmė yra 4 MB.
-   `RequestSize` : Baitų skaičius, kurį reikia bandyti perskaityti vienoje HTTP užklausoje į serverį. Numatytoji reikšmė yra 4 MB.
-   `ConcurrentRequests` : Parinktis „ConcurrentRequests“ palaiko spartesnį duomenų atsisiuntimą nurodydama, kiek užklausų reikia atlikti lygiagrečiai atminties naudojimo sąskaita. Reikalinga atmintis – (ConcurrentRequest \* RequestSize). Numatytoji reikšmė yra 16.
-   `HierarchicalNavigation` : Loginė reikšmė (true / false), kontroliuojanti, ar failai pateikiami kaip katalogo medžio rodinys, ar kaip plokščiasis sąrašas. Numatytoji reikšmė yra „false“.



## Category
Accessing data
