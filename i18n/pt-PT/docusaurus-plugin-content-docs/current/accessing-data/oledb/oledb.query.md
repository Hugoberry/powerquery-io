---
title: OleDb.Query
---

# OleDb.Query


Devolve o resultado da execução de uma consulta nativa numa origem de dados OLE DB.


## Syntax

```powerquery
OleDb.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Devolve o resultado de executar `query` com a cadeia de carateres `connectionString` com OLE DB. `connectionString` pode ser texto ou um registo de pares de valores da propriedade. Os valores da propriedade podem ser texto ou número. Poderá ser fornecido um parâmetro de registo opcional, `options`, para especificar propriedades adicionais. O registo pode conter os seguintes campos:

-   `ConnectionTimeout` : Uma duração que controla o tempo que se deve aguardar antes de abandonar uma tentativa de ligar ao servidor. O valor predefinido é dependente do controlador.
-   `CommandTimeout` : Uma duração que controla o tempo em que a consulta do lado do servidor está autorizada a ser executada antes de ser cancelada. O valor predefinido é dez minutos.
-   `SqlCompatibleWindowsAuth` : Uma lógica (true/false) que determina se é para produzir opções de cadeia de ligação compatíveis com o SQL Server para a autenticação Windows. O valor predefinido é true.



## Category
Accessing data
