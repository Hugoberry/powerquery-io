---
title: SparkPost.NavTable
---

# SparkPost.NavTable



## Syntax

```powerquery
SparkPost.NavTable(
    DaysToAggregate as number
) as table
```


## Details

Regăsiți tabelele încorporate expuse de conectorul SparkPost cu date agregate pentru un număr de zile specificat de utilizator. Când reîmprospătați aceste tabele sau apelați API-ul SparkPost utilizând acest conector, rețineți că API-ul SparkPost are o limită de rată API strictă. Dacă vedeți un cod de stare 429 returnat de serverul SparkPost, ați atins limita de rată și va trebui să așteptați câteva clipe înainte de a face mai multe apeluri. Când alegeți o valoare pentru parametrul Număr de zile, rețineți că API-ul stochează numai 6 luni de date.


