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

Devolve uma tabela de esquemas disponíveis no servidor chamado pelo parâmetro de <code>servidor</code> na base de dados com o nome do parâmetro de<code>base de dados</code>.Um parâmetro de registo opcional, <code>opções</code>, pode ser fornecido para especificar propriedades adicionais. O registo pode conter os seguintes campos:<ul>    <li><code>ConnectionTimeout</code>: uma duração que controla quanto tempo deve aguardar antes de abandonar uma tentativa para estabelecer uma ligação ao servidor. O valor predefinido é dependente do controlador.</li>    <li><code>CommandTimeout </code>: uma duração que controla quanto tempo a consulta do lado do servidor está autorizada a executar antes de ter sido cancelado. O valor predefinido é dependente do controlador.</li></ul>


## Examples

### Example #1 
Listar as tabelas no Vertica
```powerquery

```



