---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


Retorna a coleção de esquema para uma fonte de dados do ADO.NET.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Retorna a coleção de esquema da fonte de dados ADO.NET com o nome de provedor `providerName` e a cadeia de conexão `connectionString`. `connectionString` pode ser texto ou um registo de pares de valores da propriedade. Os valores da propriedade podem ser texto ou número. Um parâmetro de registro opcional, `options`, pode ser fornecido para especificar propriedades adicionais. O registro pode conter os seguintes campos:

-   `CommandTimeout` : Uma duração que controla por quanto tempo a consulta do servidor tem permissão para ser executada até que seja cancelada. O valor padrão é dez minutos.
-   `SqlCompatibleWindowsAuth` : Um valor lógico (true/false) que determina se as opções de cadeia de conexão compatíveis com o SQL Server devem ser produzidas para a autenticação do Windows. O valor padrão é true.
-   `TypeMap`



## Category
Accessing data
