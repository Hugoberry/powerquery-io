---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


Adatok importálása Amazon Redshift-adatbázisból.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Visszaad egy táblázatot, amely felsorolja az Amazon Redshift fürtön `server` lévő táblákat az adatbázisban `database`. Megadható egy `options` opcionális rekordparaméter a következő beállítások szabályozásához:

-   `Szolgáltató neve`: A kapcsolat szolgáltatói neveként használandó szöveges érték. Ez a Microsoft-hitelesítéskor használatos.
-   `Köteg mérete`: A szerver egyetlen hívása során lehívott sorok száma.


## Examples

### Example #1

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



