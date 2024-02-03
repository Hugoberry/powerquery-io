---
title: Salesforce.Reports
---

# Salesforce.Reports


## Description

Devuelve los informes desde la cuenta Salesforce.


## Syntax

```powerquery
Salesforce.Reports(
    optional loginUrl as text,
    optional options as record
) as table
```


## Details

Devuelve los informes de la cuenta de Salesforce que se proporciona en las credenciales. La cuenta se conectará a través del entorno de <code>loginUrl</code> proporcionado. Si no se proporciona ninguno, la cuenta se conectará al entorno de producción (https://login.salesforce.com). Se puede proporcionar un parámetro de registro opcional, <code>options</code>, para especificar propiedades adicionales. El registro puede contener los campos siguientes:    <ul><li><code>ApiVersion</code> : La versi&#243;n de la API de Salesforce que se usar&#225; para esta consulta. Si no se especifica, se usar&#225; la versi&#243;n 29.0 de la API.</li><li><code>Timeout</code> : Duraci&#243;n que controla cu&#225;nto tiempo es necesario esperar antes de abandonar la solicitud al servidor. El valor predeterminado depende del origen.</li></ul>    



## Category
Accessing data
