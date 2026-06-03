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

Returnerar kubdata från AtScale på servern `server`. En valfri postparameter `options`, kan anges för att kontrollera följande alternativ:

-   `TypedMeasureColumns`: ett logiskt värde som anger om typerna som anges i den multidimensionella eller tabularmodellen används för typerna av de tillagda måttkolumnerna. När det är konfigurerat som falskt så används typen ”number” för alla måttkolumner. Standardvärdet för det här alternativet är falskt.
-   `CommandTimeout`: en varaktighet (i sekunder) som styr hur länge serversidefrågan tillåts köra innan den avbryts. Standardvärdet är drivrutinsberoende.
-   `ConnectionTimeout`: en varaktighet (i sekunder) som styr tiden att vänta innan ett försök att upprätta en anslutning till servern överges. Standardvärdet är drivrutinsberoende.

Postparameter har angetts som \[alternativ1 = värde1, alternativ2 = värde2...\].


## Examples

### Example #1
Listar kubdata i en AtScale-kub.
```powerquery
AtScale.Cubes("https://contoso.atscale.com:10502/xmla/...")
```



