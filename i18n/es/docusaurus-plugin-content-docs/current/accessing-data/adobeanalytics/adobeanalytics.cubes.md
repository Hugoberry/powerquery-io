---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


Devuelve los conjuntos de informes en Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Remarks

Devuelve una tabla de paquetes multidimensionales de Adobe Analytics. Se puede especificar un parámetro de registro opcional (`options`) para controlar las siguientes opciones:

-   `HierarchicalNavigation` : Un valor lógico (True o False) que establece si se deben ver las tablas agrupadas por sus nombres de esquema (el valor predeterminado es False).
-   `MaxRetryCount` : Número de reintentos que se realizarán durante el sondeo para obtener el resultado de la consulta. El valor predeterminado es de 120.
-   `RetryInterval` : Duración del período entre reintentos. El valor predeterminado es de 1 segundo.
-   `Implementation` : Especifica la versión de la API de Adobe Analytics. Los valores aceptados son: "2.0". El valor predeterminado usa la versión 1.4 de la API.



## Category
Accessing data
