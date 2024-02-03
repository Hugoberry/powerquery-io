---
title: AzureStorage.Tables
---

# AzureStorage.Tables


## Description

Devuelve una tabla de navegación que contiene las tablas encontradas en la cuenta especificada de un almacén de credenciales de Azure.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Details

Devuelve una tabla de navegación con una fila por cada tabla en la dirección URL de la cuenta, <code>account</code>, de un almacén de Azure Storage. Cada fila contiene un vínculo a la tabla de Azure. Se puede proporcionar un parámetro de registro opcional, <code>options</code>, para especificar propiedades adicionales. El registro puede contener los siguientes campos:    <ul><li><code>Timeout</code> : Duraci&#243;n que controla cu&#225;nto tiempo es necesario esperar antes de abandonar la solicitud al servidor. El valor predeterminado depende del origen.</li></ul>



## Category
Accessing data
