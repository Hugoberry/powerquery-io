---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


Naimportuje údaje z databázy služby Amazon Redshift.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Vráti tabuľku s tabuľkami na serveri `server` klastra služby Amazon Redshift v databáze `database`. Voliteľný parameter záznamu, `options`, možno zadať na ovládanie nasledujúcich možností:

-   `Názov poskytovateľa`: Textová hodnota, ktorá sa má použiť ako názov poskytovateľa pripojenia. Používa sa pri používaní overovania spoločnosti Microsoft.
-   `Kľúčová veľkosť`: Počet riadkov načítaných v rámci jedného volania na server.


## Examples

### Example #1

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



