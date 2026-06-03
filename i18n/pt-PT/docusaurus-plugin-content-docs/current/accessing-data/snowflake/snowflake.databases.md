---
title: Snowflake.Databases
---

# Snowflake.Databases


Importar dados de um armazém de Informática de Snowflake.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Remarks

Devolve uma tabela que lista as tabelas do `armazém` de Computação da Snowflake localizado no `servidor`. Pode ser especificado um parâmetro de registo opcional, `opções`, para controlar as seguintes opções:

-   `Função`: um valor de texto a utilizar como nome da Função para a ligação.
-   `CreateNavigationProperties`: um valor lógico (verdadeiro/falso) que define se devem ser geradas propriedades de navegação nos valores devolvidos (a predefinição é verdadeiro)
-   `ConnectionTimeout`: o número de segundos a aguardar por respostas da Snowflake.
-   `CommandTimeout`: o número de segundos a aguardar a execução de uma consulta.


## Examples

### Example #1
Liste as tabelas num armazém de Snowflake.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



