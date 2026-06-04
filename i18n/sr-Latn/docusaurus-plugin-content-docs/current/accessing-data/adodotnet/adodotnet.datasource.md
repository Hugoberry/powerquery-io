---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


Vraća kolekciju šema za ADO.NET izvor podataka.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Vraća kolekciju šema za ADO.NET izvor podataka sa imenom dobavljača `providerName` i niskom veze `connectionString`. `connectionString` može da bude tekst ili zapis parova vrednosti svojstava. Vrednosti svojstava mogu da budu tekst ili broj. Opcionalni parametar zapisa, `options`, može biti naveden radi navođenja dodatnih svojstava. Zapis može da sadrži sledeća polja:

-   `CommandTimeout` : Vremenski period pomoću kojeg se određuje koliko dugo je upitu na strani servera dozvoljeno da bude aktivan pre otkazivanja. Podrazumevana vrednost je deset minuta.
-   `SqlCompatibleWindowsAuth` : Logička vrednost (true/false) koja određuje da li se stvaraju opcije niske veze kompatibilne sa SQL serverom za Windows potvrdu identiteta. Podrazumevana vrednost je true.
-   `TypeMap`



## Category
Accessing data
