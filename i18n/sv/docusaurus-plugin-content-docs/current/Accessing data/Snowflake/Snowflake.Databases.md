---
title: Snowflake.Databases
---

# Snowflake.Databases


## Description

Importera data från ett Snowflake Computing-lager.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Details

Returnerar en tabellista med tabeller i Snowflake Computing <code>warehouse</code> på <code>server</code>. En valfri postparameter, <code>options</code>, kan anges för att styra följande alternativ:<ul><li><code>Roll</code>: Ett textvärde som ska användas som rollnamn för anslutningen.</li><li><code>CreateNavigationProperties</code>: En logiskt värde (sant/falskt) som fastställer om navigeringsegenskaper för de returnerade värdena ska skapas (standardvärdet är sant).</li><li><code>ConnectionTimeout</code>: Antal sekunder att vänta på nätverkssvar från Snowflake.</li><li><code>CommandTimeout</code>: Antal sekunder att vänta på att en fråga ska köras.</li></ul>    


## Examples

### Example #1 
Lista tabellerna i ett Snowflake-lager.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



