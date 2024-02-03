---
title: Snowflake.Databases
---

# Snowflake.Databases


## Description

Adatok importálása egy Snowflake Computing-adatraktárból.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Details

Egy táblát ad vissza, amely a következő kiszolgálón található Snowflake Computing <code>warehouse</code> tábláit listázza: <code>server</code>. Megadható egy opcionális rekordparaméter (<code>options</code>) a következő beállítások vezérléséhez:<ul><li><code>Role</code>: a kapcsolathoz a szerepkör neveként használni kívánt szöveges érték.</li><li><code>CreateNavigationProperties</code>: Egy logikai (igaz/hamis) érték, amely megadja, hogy a rendszer létrehozzon-e navigációs tulajdonságokat a visszaadott értékekhez (az alapértelmezett érték true).</li><li><code>ConnectionTimeout</code>: A Snowflake hálózati válaszaira való várakozással töltendő másodpercek száma.</li><li><code>CommandTimeout</code>: A lekérdezés végrehajtására való várakozással töltendő másodpercek száma.</li></ul>


## Examples

### Example #1 
Snowflake-adatraktárban található táblák felsorolása.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



