---
title: Salesforce.Data
---

# Salesforce.Data


Devuelve los objetos desde la cuenta Salesforce.


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Remarks

Devuelve los objetos de la cuenta de Salesforce que se proporciona en las credenciales. La cuenta se conectará a través del entorno de `loginUrl` proporcionado. Si no se proporciona ninguno, la cuenta se conectará al entorno de producción (https://login.salesforce.com). Se puede proporcionar un parámetro de registro opcional, `options`, para especificar propiedades adicionales. El registro puede contener los campos siguientes:

-   `CreateNavigationProperties` : Un valor lógico (true o false) que establece si se deben generar propiedades de navegación en los valores devueltos (el valor predeterminado es false).
-   `ApiVersion` : La versión de la API de Salesforce que se usará para esta consulta. Si no se especifica, se usará la versión 29.0 de la API.
-   `Timeout` : Duración que controla cuánto tiempo es necesario esperar antes de abandonar la solicitud al servidor. El valor predeterminado depende del origen.



## Category
Accessing data
