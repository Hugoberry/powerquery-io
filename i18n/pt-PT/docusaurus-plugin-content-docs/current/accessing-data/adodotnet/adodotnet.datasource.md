---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


Devolve a coleção de esquemas para uma origem de dados ADO.NET.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Devolve a coleção de esquemas para a origem de dados ADO.NET com o nome de fornecedor `providerName` e a cadeia de ligação `connectionString`. `connectionString` pode ser texto ou um registo de pares de valor da propriedade. Os valores da propriedade podem ser texto ou números. Poderá ser fornecido um parâmetro de registo opcional, `options`, para especificar propriedades adicionais. O registo pode conter os seguintes campos:

-   `CommandTimeout` : Uma duração que controla o tempo em que a consulta do lado do servidor está autorizada a ser executada antes de ser cancelada. O valor predefinido é dez minutos.
-   `SqlCompatibleWindowsAuth` : Uma lógica (true/false) que determina se é para produzir opções de cadeia de ligação compatíveis com o SQL Server para a autenticação Windows. O valor predefinido é true.
-   `TypeMap`



## Category
Accessing data
