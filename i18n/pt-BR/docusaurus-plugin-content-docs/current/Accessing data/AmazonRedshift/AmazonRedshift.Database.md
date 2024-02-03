---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


## Description

Importar dados do banco de dados do Amazon Redshift.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Retorna uma tabela listando no cluster do Amazon Redshift <code>servidor</code> no banco de dados <code>banco de dados</code>. Um parâmetro de registro opcional, <code>opções</code>, pode ser especificado para controlar as seguintes opções:<ul><li><code>Nome do Provedor</code>: um valor de texto a ser usado como o Nome do Provedor para a conexão. Isso é usado ao usar a Autenticação da Microsoft.</li><li><code>Tamanho do Lote</code>: o número de linhas buscadas em uma única chamada para o servidor.</li></ul>  


## Examples

### Example #1 

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



