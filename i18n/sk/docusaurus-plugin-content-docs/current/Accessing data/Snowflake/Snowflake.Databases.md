---
title: Snowflake.Databases
---

# Snowflake.Databases


## Description

Naimportujte údaje zo skladu Snowflake Computing.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Details

Vráti tabuľku so zoznamom tabuliek v sklade <code>warehouse</code> Snowflake Computingu, ktorý sa nachádza na serveri <code>server</code>. Môže sa zadať nepovinný parameter záznamu <code>options</code>, ktorý riadi tieto možnosti:<ul><li><code>Role</code>: textová hodnota, ktorá sa v pripojení použije ako názov roly.</li><li><code>CreateNavigationProperties</code>: logická hodnota (true/false), ktorá určí, či sa v súvislosti s vrátenými hodnotami majú vygenerovať ich navigačné vlastnosti (predvolenou hodnotou je true).</li><li><code>ConnectionTimeout</code>: čakanie na odpovede siete z rozhrania Snowflake, v sekundách.</li><li><code>CommandTimeout</code>: čakanie na vykonanie dotazu, v sekundách.</li></ul>    


## Examples

### Example #1 
Uvedie zoznam tabuliek v sklade Snowflake.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



