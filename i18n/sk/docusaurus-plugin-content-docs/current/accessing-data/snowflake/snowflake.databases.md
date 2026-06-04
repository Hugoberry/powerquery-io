---
title: Snowflake.Databases
---

# Snowflake.Databases


Naimportujte údaje zo skladu Snowflake Computing.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Remarks

Vráti tabuľku so zoznamom tabuliek v sklade `warehouse` Snowflake Computingu, ktorý sa nachádza na serveri `server`. Môže sa zadať nepovinný parameter záznamu `options`, ktorý riadi tieto možnosti:

-   `Role`: textová hodnota, ktorá sa v pripojení použije ako názov roly.
-   `CreateNavigationProperties`: logická hodnota (true/false), ktorá určí, či sa v súvislosti s vrátenými hodnotami majú vygenerovať ich navigačné vlastnosti (predvolenou hodnotou je true).
-   `ConnectionTimeout`: čakanie na odpovede siete z rozhrania Snowflake, v sekundách.
-   `CommandTimeout`: čakanie na vykonanie dotazu, v sekundách.


## Examples

### Example #1
Uvedie zoznam tabuliek v sklade Snowflake.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



