---
title: AdoDotNet.Query
---

# AdoDotNet.Query


Devolve o resultado da execução de uma consulta nativa numa origem de dados ADO.NET.


## Syntax

```powerquery
AdoDotNet.Query(
    providerName as text,
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Devolve o resultado da execução de `query` com a cadeia de ligação `connectionString` utilizando o fornecedor ADO.NET `providerName`. `connectionString` pode ser texto ou um registo de pares de valores da propriedade. Os valores da propriedade podem ser texto ou número. Poderá ser fornecido um parâmetro de registo opcional, `options`, para especificar propriedades adicionais. O registo pode conter os seguintes campos:

-   `CommandTimeout` : Uma duração que controla o tempo em que a consulta do lado do servidor está autorizada a ser executada antes de ser cancelada. O valor predefinido é dez minutos.
-   `SqlCompatibleWindowsAuth` : Uma lógica (true/false) que determina se é para produzir opções de cadeia de ligação compatíveis com o SQL Server para a autenticação Windows. O valor predefinido é true.



## Category
Accessing data
