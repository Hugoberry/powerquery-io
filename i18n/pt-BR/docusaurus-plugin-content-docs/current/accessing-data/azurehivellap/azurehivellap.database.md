---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


Importar dados do Interactive Query do HDInsight


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Retorna uma lista de tabelas do Interactive Query do HDInsight especificada pelo `banco de dados` no `servidor` do Interactive Query do HDInsight. Um número da porta pode ser especificado opcionalmente com o servidor, separado por dois-pontos. Um parâmetro de `opções` opcional pode ser especificado para controlar as seguintes opções:

-   `ConnectionTimeout`: uma duração que controla quanto tempo esperar antes de abandonar uma tentativa de estabelecer uma conexão com o servidor. O valor padrão é dependente do driver.
-   `CommandTimeout`: uma duração que controla quanto tempo a consulta do lado do servidor tem permissão para ser executada antes de ser cancelada. O valor padrão é dependente do driver.

O parâmetro de `opções` é especificado como \[option1 = value1, option2 = value2...\].


