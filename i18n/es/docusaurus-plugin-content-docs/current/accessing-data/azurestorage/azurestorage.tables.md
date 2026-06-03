---
title: AzureStorage.Tables
---

# AzureStorage.Tables


Devuelve una tabla de navegación que contiene las tablas encontradas en la cuenta especificada de un almacén de credenciales de Azure.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Remarks

Devuelve una tabla de navegación con una fila por cada tabla en la dirección URL de la cuenta, `account`, de un almacén de Azure Storage. Cada fila contiene un vínculo a la tabla de Azure. Se puede proporcionar un parámetro de registro opcional, `options`, para especificar propiedades adicionales. El registro puede contener los campos siguientes:

-   `Timeout` : Duración que controla cuánto tiempo es necesario esperar antes de abandonar la solicitud al servidor. El valor predeterminado depende del origen.



## Category
Accessing data
