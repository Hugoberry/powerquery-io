---
title: Snowflake.Databases
---

# Snowflake.Databases


Importe dados de um warehouse do Snowflake Computing.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Remarks

Retorna uma tabela que lista as tabelas no `warehouse` do Snowflake Computing, localizado no `server`. Um parâmetro de registro opcional, `options`, pode ser especificado para controlar as seguintes opções

-   `Função`: um valor de texto a ser usado como o Nome da função para a conexão.
-   `CreateNavigationProperties`: um valor lógico (true/false) que define se as propriedades de navegação devem ser geradas nos valores retornados (o padrão é true)
-   `ConnectionTimeout`: o número de segundos de espera das respostas de rede do Snowflake.
-   `CommandTimeout`: o número de segundos de espera até que uma consulta seja executada.


## Examples

### Example #1
Liste as tabelas em um warehouse do Snowflake.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



