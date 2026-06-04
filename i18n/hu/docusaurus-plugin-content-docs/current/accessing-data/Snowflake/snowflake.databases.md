---
title: Snowflake.Databases
---

# Snowflake.Databases


Adatok importálása egy Snowflake Computing-adatraktárból.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Remarks

Egy táblát ad vissza, amely a következő kiszolgálón található Snowflake Computing `warehouse` tábláit listázza: `server`. Megadható egy opcionális rekordparaméter (`options`) a következő beállítások vezérléséhez:

-   `Role`: a kapcsolathoz a szerepkör neveként használni kívánt szöveges érték.
-   `CreateNavigationProperties`: Egy logikai (igaz/hamis) érték, amely megadja, hogy a rendszer létrehozzon-e navigációs tulajdonságokat a visszaadott értékekhez (az alapértelmezett érték true).
-   `ConnectionTimeout`: A Snowflake hálózati válaszaira való várakozással töltendő másodpercek száma.
-   `CommandTimeout`: A lekérdezés végrehajtására való várakozással töltendő másodpercek száma.


## Examples

### Example #1
Snowflake-adatraktárban található táblák felsorolása.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



