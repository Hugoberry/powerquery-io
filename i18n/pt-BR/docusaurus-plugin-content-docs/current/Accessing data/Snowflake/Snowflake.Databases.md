---
title: Snowflake.Databases
---

# Snowflake.Databases


## Description

Importe dados de um warehouse do Snowflake Computing.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Details

Retorna uma tabela que lista as tabelas no <code>warehouse</code> do Snowflake Computing, localizado no <code>server</code>. Um parâmetro de registro opcional, <code>options</code>, pode ser especificado para controlar as seguintes opções<ul><li><code>Função</code>: um valor de texto a ser usado como o Nome da função para a conexão.</li><li><code>CreateNavigationProperties</code>: um valor lógico (true/false) que define se as propriedades de navegação devem ser geradas nos valores retornados (o padrão é true)</li><li><code>ConnectionTimeout</code>: o número de segundos de espera das respostas de rede do Snowflake.</li><li><code>CommandTimeout</code>: o número de segundos de espera até que uma consulta seja executada.</li></ul>    


## Examples

### Example #1 
Liste as tabelas em um warehouse do Snowflake.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



