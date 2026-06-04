---
title: AdoDotNet.Query
---

# AdoDotNet.Query


Vraća rezultat pokretanja osnovnog upita na ADO.NET izvoru podataka.


## Syntax

```powerquery
AdoDotNet.Query(
    providerName as text,
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Vraća rezultat pokretanja `query` uz nisku veze `connectionString` pomoću ADO.NET dobavljača `providerName`. `connectionString` može da bude tekst ili zapis parova vrednosti svojstava. Vrednosti svojstava mogu da budu tekst ili broj. Opcionalni parametar zapisa, `options`, može biti naveden radi navođenja dodatnih svojstava. Zapis može da sadrži sledeća polja:

-   `CommandTimeout` : Vremenski period pomoću kojeg se određuje koliko dugo je upitu na strani servera dozvoljeno da bude aktivan pre otkazivanja. Podrazumevana vrednost je deset minuta.
-   `SqlCompatibleWindowsAuth` : Logička vrednost (true/false) koja određuje da li se stvaraju opcije niske veze kompatibilne sa SQL serverom za Windows potvrdu identiteta. Podrazumevana vrednost je true.



## Category
Accessing data
