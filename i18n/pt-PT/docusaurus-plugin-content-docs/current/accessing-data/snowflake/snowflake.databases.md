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

Devolve uma tabela que lista as tabelas do <code>armazém</code> de Computação da Snowflake localizado no <code>servidor</code>. Pode ser especificado um parâmetro de registo opcional, <code>opções</code>, para controlar as seguintes opções:<ul><li><code>Função</code>: um valor de texto a utilizar como nome da Função para a ligação.</li><li><code>CreateNavigationProperties</code>: um valor lógico (verdadeiro/falso) que define se devem ser geradas propriedades de navegação nos valores devolvidos (a predefinição é verdadeiro)</li><li> <code>ConnectionTimeout</code>: o número de segundos a aguardar por respostas da Snowflake.</li><li><code>CommandTimeout</code>: o número de segundos a aguardar a execução de uma consulta.</li></ul>    


## Examples

### Example #1 
Liste as tabelas num armazém de Snowflake.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



