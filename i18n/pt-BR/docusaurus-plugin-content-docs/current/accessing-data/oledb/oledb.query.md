---
title: OleDb.Query
---

# OleDb.Query


Retorna o resultado da execução de uma consulta nativa em uma fonte de dados do OLE DB.


## Syntax

```powerquery
OleDb.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Retorna o resultado de `query` em execução com uma cadeia de conexão `connectionString` usando OLE DB. `connectionString` pode ser texto ou um registo de pares de valores da propriedade. Os valores da propriedade podem ser texto ou número. Um parâmetro de registro opcional, `options`, pode ser fornecido para especificar propriedades adicionais. O registro pode conter um dos seguintes dos campos:

-   `ConnectionTimeout` : Uma duração que controla o tempo de espera até que uma tentativa de fazer uma conexão com o servidor seja abandonada. O valor padrão depende do driver.
-   `CommandTimeout` : Uma duração que controla por quanto tempo a consulta do servidor tem permissão para ser executada até que seja cancelada. O valor padrão é dez minutos.
-   `SqlCompatibleWindowsAuth` : Um valor lógico (true/false) que determina se as opções de cadeia de conexão compatíveis com o SQL Server devem ser produzidas para a autenticação do Windows. O valor padrão é true.



## Category
Accessing data
