---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


Retorna els grups d'informes a l'Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Remarks

Retorna una taula de paquets multidimensionals de l'Adobe Analytics. Es pot especificar un paràmetre de registre opcional (`options`) per controlar les opcions següents:

-   `HierarchicalNavigation` : Disjunció lògica ("true" o "false") que estableix si cal visualitzar les taules agrupades pel nom d'esquema. El valor per defecte és "false".
-   `MaxRetryCount` : Nombre de reintents que es faran durant el sondeig per obtenir els resultats de la consulta. El valor per defecte és de 120.
-   `RetryInterval` : Durada del període entre cada reintent. El valor per defecte és d'1 segon.
-   `Implementation` : Especifiqueu la versió de l'API de l'Adobe Analytics. Els valors vàlids són: "2.0". Per defecte s'utilitza la versió de l'API 1.4.



## Category
Accessing data
