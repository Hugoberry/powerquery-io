---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


Importar dados de um LLAP do Hive


## Syntax

```powerquery
ApacheHiveLLAP.Database(
    server as text,
    database as text,
    thriftTransport as number,
    optional options as record
) as table
```


## Remarks

Retorna uma lista de tabelas do LLAP do Hive especificada pelo <code>database</code> no <code>server</code> do LLAP do Hive usando o <code>protocol</code> selecionado. Um número da porta pode ser especificado opcionalmente com o servidor, separado por dois-pontos. O Protocolo de Transporte Thrift é um tipo enumerado com os valores "Standard" e "HTTP". Um parâmetro <code>options</code> opcional pode ser especificado para controlar as seguintes opções:<ul>        <li><code>ConnectionTimeout</code>: uma duração que controla quanto tempo esperar antes de abandonar uma tentativa de estabelecer uma conexão com o servidor. O valor padrão é dependente do driver.</li>        <li><code>CommandTimeout</code>: uma duração que controla quanto tempo a consulta do lado do servidor tem permissão para ser executada antes de ser cancelada. O valor padrão é dependente do driver.</li></ul>O parâmetro <code>options</code> é especificado como [option1 = value1, option2 = value2...].


