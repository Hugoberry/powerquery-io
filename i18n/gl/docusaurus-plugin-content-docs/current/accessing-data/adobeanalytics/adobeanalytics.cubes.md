---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


Devolve os conxuntos de informes en Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Remarks

Devolve unha táboa de paquetes multidimensionais de Adobe Analytics. Pode especificarse un parámetro de rexistro opcional, `options`, para controlar as seguintes opcións:

-   `HierarchicalNavigation` : Unha función lóxica (true/false) que establece se ver as táboas agrupadas polos nomes de esquema (o valor predefinido é false).
-   `MaxRetryCount` : Número de tentativas que se realizarán durante a enquisa para obter o resultado da consulta. O valor predefinido é 120.
-   `RetryInterval` : Duración do período de tempo entre tentativas. O valor predefinido é de 1 segundo.
-   `Implementation` : Especifica a versión da API de Adobe Analytics. Os valores válidos son “2.0”. A predeterminada usa a versión 1.4 da API.



## Category
Accessing data
