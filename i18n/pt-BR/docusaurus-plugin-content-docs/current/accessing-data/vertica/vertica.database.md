---
title: Vertica.Database
---

# Vertica.Database


Importe dados do Vertica


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Retorna uma tabela de esquemas disponíveis no servidor nomeada pelo parâmetro `server` no banco de dados nomeado pelo parâmetro `database`. Um parâmetro de registro opcional `options` pode ser fornecido para especificar propriedades adicionais. O registro pode conter os seguintes campos:

-   `ConnectionTimeout`: uma duração que controla o tempo de espera antes de abandonar uma tentativa conexão com o servidor. O valor padrão é dependente do driver.
-   `CommandTimeout` : uma duração que controla por quanto tempo a consulta do lado do servidor pode ser executada antes de ser cancelada. O valor padrão é dependente do driver.


## Examples

### Example #1
Liste as tabelas no Vertica
```powerquery

```



