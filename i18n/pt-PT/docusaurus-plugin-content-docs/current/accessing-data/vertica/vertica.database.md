---
title: Vertica.Database
---

# Vertica.Database


Importar dados do Vertica


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Devolve uma tabela de esquemas disponíveis no servidor chamado pelo parâmetro de `servidor` na base de dados com o nome do parâmetro de`base de dados`. Um parâmetro de registo opcional, `opções`, pode ser fornecido para especificar propriedades adicionais. O registo pode conter os seguintes campos:

-   `ConnectionTimeout`: uma duração que controla quanto tempo deve aguardar antes de abandonar uma tentativa para estabelecer uma ligação ao servidor. O valor predefinido é dependente do controlador.
-   `CommandTimeout` : uma duração que controla quanto tempo a consulta do lado do servidor está autorizada a executar antes de ter sido cancelado. O valor predefinido é dependente do controlador.


## Examples

### Example #1
Listar as tabelas no Vertica
```powerquery

```



