---
title: Salesforce.Data
---

# Salesforce.Data


Devolve os obxectos da conta do equipo de vendas.


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Remarks

Devolve os obxectos da conta de Salesforce fornecidos nas credenciais. A conta conectarase a través do ambiente fornecido `loginUrl`. Se non se fornece ningún, a conta conectarase coa produción (https://login.salesforce.com). Pode fornecerse un parámetro de rexistro opcional, `options`, para especificar propiedades adicionais. O rexistro pode conter os seguintes campos:

-   `CreateNavigationProperties` : Unha lóxica (true/false) que establece se xerar propiedades de navegación nos valores devoltos (o valor predefinido é false).
-   `ApiVersion` : A versión da API de Salesforce que se usará para esta consulta. Se non se especifica, usarase a versión 29.0 da API.
-   `Timeout` : Duración que controla o tempo que se debe agardar antes de abandonar unha solicitude ao servidor. O valor predefinido é específico da orixe.



## Category
Accessing data
