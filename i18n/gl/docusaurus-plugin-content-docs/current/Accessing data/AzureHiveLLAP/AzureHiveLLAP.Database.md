---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


## Description

Importación de datos de HDInsight Interactive Query


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Devolve unha lista de táboas de HDInsight Interactive Query especificada na <code>base de datos</code> do <code>servidor</code> de HDInsight Interactive Query. Pode especificarse de forma opcional un número de porto co servidor, separado de dous puntos. Pode especificarse un parámetro <code>options</code> opcional para controlar as seguintes opcións:<ul>        <li><code>ConnectionTimeout</code>: Unha duración que controla o tempo de espera antes de abandonar unha tentativa para establecer unha conexión co servidor. O valor predefinido é dependente do controlador.</li>        <li><code>CommandTimeout</code>: Unha duración que controla o tempo que ten permitido executarse a consulta do lado do servidor antes de cancelarse. O valor predefinido é dependente do controlador.</li></ul>O parámetro <code>options</code> especifícase como [option1 = value1, option2 = value2...].


