---
title: Salesforce.Data
---

# Salesforce.Data


## Description

Devuelve los objetos desde la cuenta Salesforce.


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Details

Devuelve los objetos de la cuenta de Salesforce que se proporciona en las credenciales. La cuenta se conectará a través del entorno de <code>loginUrl</code> proporcionado. Si no se proporciona ninguno, la cuenta se conectará al entorno de producción (https://login.salesforce.com). Se puede proporcionar un parámetro de registro opcional, <code>options</code>, para especificar propiedades adicionales. El registro puede contener los campos siguientes:    <ul><li><code>CreateNavigationProperties</code> : Un valor l&#243;gico (true o false) que establece si se deben generar propiedades de navegaci&#243;n en los valores devueltos (el valor predeterminado es false).</li><li><code>ApiVersion</code> : La versi&#243;n de la API de Salesforce que se usar&#225; para esta consulta. Si no se especifica, se usar&#225; la versi&#243;n 29.0 de la API.</li><li><code>Timeout</code> : Duraci&#243;n que controla cu&#225;nto tiempo es necesario esperar antes de abandonar la solicitud al servidor. El valor predeterminado depende del origen.</li></ul>    



## Category
Accessing data
