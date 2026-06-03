---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


Importar dados do banco de dados do Amazon Redshift.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Retorna uma tabela listando no cluster do Amazon Redshift `servidor` no banco de dados `banco de dados`. Um parâmetro de registro opcional, `opções`, pode ser especificado para controlar as seguintes opções:

-   `Nome do provedor`: um valor de texto a ser usado como o Nome do Provedor para a conexão. Isto é usado ao usar a Autenticação da Microsoft.
-   `Tamanho do Lote: o número de linhas buscadas em uma única chamada para o servidor.`


## Examples

### Example #1

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



