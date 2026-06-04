---
title: Salesforce.Reports
---

# Salesforce.Reports


Devolve os informes da conta do equipo de vendas.


## Syntax

```powerquery
Salesforce.Reports(
    optional loginUrl as text,
    optional options as record
) as table
```


## Remarks

Devolve os informes da conta de Salesforce fornecidos nas credenciais. A conta conectarase a través do ambiente fornecido `loginUrl`. Se non se fornece ningún, a conta conectarase coa produción (https://login.salesforce.com). Pode fornecerse un parámetro de rexistro opcional, `options`, para especificar propiedades adicionais. O rexistro pode conter os seguintes campos:

-   `ApiVersion` : A versión da API de Salesforce que se usará para esta consulta. Se non se especifica, usarase a versión 29.0 da API.
-   `Timeout` : Duración que controla o tempo que se debe agardar antes de abandonar unha solicitude ao servidor. O valor predefinido é específico da orixe.



## Category
Accessing data
