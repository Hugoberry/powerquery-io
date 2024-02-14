---
title: AtScale.Cubes
---

# AtScale.Cubes


Import-/DirectQuery-kubdata från en AtScale.


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Remarks

Returnerar kubdata från AtScale på servern <code>server</code>. En valfri postparameter <code>options</code>, kan anges för att kontrollera följande alternativ:<ul>        <li><code>TypedMeasureColumns</code>: ett logiskt värde som anger om typerna som anges i den multidimensionella eller tabularmodellen används för typerna av de tillagda måttkolumnerna. När det är konfigurerat som falskt så används typen ”number” för alla måttkolumner. Standardvärdet för det här alternativet är falskt.</li>        <li><code>CommandTimeout</code>: en varaktighet (i sekunder) som styr hur länge serversidefrågan tillåts köra innan den avbryts. Standardvärdet är drivrutinsberoende. </li>        <li><code>ConnectionTimeout</code>: en varaktighet (i sekunder) som styr tiden att vänta innan ett försök att upprätta en anslutning till servern överges. Standardvärdet är drivrutinsberoende. </li></ul>Postparameter har angetts som [alternativ1 = värde1, alternativ2 = värde2...].


