---
title: Snowflake.Databases
---

# Snowflake.Databases


Importera data från ett Snowflake Computing-lager.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Remarks

Returnerar en tabellista med tabeller i Snowflake Computing `warehouse` på `server`. En valfri postparameter, `options`, kan anges för att styra följande alternativ:

-   `Roll`: Ett textvärde som ska användas som rollnamn för anslutningen.
-   `CreateNavigationProperties`: En logiskt värde (sant/falskt) som fastställer om navigeringsegenskaper för de returnerade värdena ska skapas (standardvärdet är sant).
-   `ConnectionTimeout`: Antal sekunder att vänta på nätverkssvar från Snowflake.
-   `CommandTimeout`: Antal sekunder att vänta på att en fråga ska köras.


## Examples

### Example #1
Lista tabellerna i ett Snowflake-lager.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



