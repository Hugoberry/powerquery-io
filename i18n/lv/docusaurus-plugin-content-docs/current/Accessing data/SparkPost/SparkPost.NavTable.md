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

Tiek izgūtas iebūvētas tabulas, kas ir saistītas ar savienotāju SparkPost. Šajās tabulās tiek iekļauti dati, kas apkopoti, ņemot vērā lietotāja norādīto dienu skaitu. Ja šīs tabulas tiek atsvaidzinātas vai izsaukumi uz SparkPost API tiek veikti, izmantojot šo savienotāju, ņemiet vērā, ka SparkPost API ir strikts API pieprasījumu saņemšanas biežuma ierobežojums. Ja no SparkPost servera tiek atgriezts statusa kods 429, tas nozīmē, ka tika sasniegts maksimālais atļautais pieprasījumu biežums. Lai veiktu jaunus izsaukumus, nedaudz uzgaidiet. Izvēloties vērtību parametram Dienu skaits, jāņem vērā, ka API saglabā datus tikai par 6 mēnešiem.


