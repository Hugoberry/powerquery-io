---
title: Vertica.Database
---

# Vertica.Database


## Description

Importe dados do Vertica


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Retorna uma tabela de esquemas disponíveis no servidor nomeada pelo parâmetro <code>server</code> no banco de dados nomeado pelo parâmetro <code>database</code>.Um parâmetro de registro opcional <code>options</code> pode ser fornecido para especificar propriedades adicionais. O registro pode conter os seguintes campos:<ul>    <li><code>ConnectionTimeout</code>: uma duração que controla o tempo de espera antes de abandonar uma tentativa conexão com o servidor. O valor padrão é dependente do driver.</li>    <li><code>CommandTimeout </code>: uma duração que controla por quanto tempo a consulta do lado do servidor pode ser executada antes de ser cancelada. O valor padrão é dependente do driver.</li></ul>


## Examples

### Example #1 
Liste as tabelas no Vertica
```powerquery

```



