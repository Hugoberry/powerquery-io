---
title: Salesforce.Data
---

# Salesforce.Data


## Description

Devolve os obxectos da conta do equipo de vendas.


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Details

Devolve os obxectos da conta de Salesforce fornecidos nas credenciais. A conta conectarase a través do ambiente fornecido <code>loginUrl</code>. Se non se fornece ningún, a conta conectarase coa produción (https://login.salesforce.com). Pode fornecerse un parámetro de rexistro opcional, <code>options</code>, para especificar propiedades adicionais. O rexistro pode conter os seguintes campos:    <ul><li><code>CreateNavigationProperties</code> : Unha l&#243;xica (true/false) que establece se xerar propiedades de navegaci&#243;n nos valores devoltos (o valor predefinido &#233; false).</li><li><code>ApiVersion</code> : A versi&#243;n da API de Salesforce que se usar&#225; para esta consulta. Se non se especifica, usarase a versi&#243;n 29.0 da API.</li><li><code>Timeout</code> : Duraci&#243;n que controla o tempo que se debe agardar antes de abandonar unha solicitude ao servidor. O valor predefinido &#233; espec&#237;fico da orixe.</li></ul>    



## Category
Accessing data
