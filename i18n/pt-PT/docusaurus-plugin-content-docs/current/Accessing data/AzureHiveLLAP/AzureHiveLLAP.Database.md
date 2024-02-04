---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


## Description

Importar dados de Interactive Query do HDInsight


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Devolve uma lista de tabelas do Interactive Query do HDInsight especificadas pela<code>base de dados</code> no <code>servidor</code> do Interactive Query do HDInsight. Opcionalmente, pode ser especificado um número de porta juntamente com o servidor, separado por dois pontos. Pode ser especificado um parâmetro <code>options</code>, para controlar as opções seguintes:<ul>        <li><code>ConnectionTimeout</code>: uma duração que controla quanto tempo aguardar até abandonar uma tentativa de realizar uma ligação ao servidor. O valor predefinido é "dependente do controlador".</li>        <li><code>CommandTimeout</code>: uma duração que controla durante quanto tempo é que a consulta do lado do servidor tem permissão para ser executada antes de ser cancelada. O valor predefinido é "dependente do controlador".</li></ul>O parâmetro <code>options</code> é especificado como [opção1 = valor1, opção2 = valor2...].


