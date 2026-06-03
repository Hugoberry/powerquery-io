---
title: OleDb.DataSource
---

# OleDb.DataSource


Retorna uma tabela de tabelas e visualizações SQL da fonte de dados OLE DB.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Retorna uma tabela de tabelas SQL e exibições da fonte OLE DB de dados especificada pela cadeia de conexão `connectionString`. `connectionString` pode ser texto ou um registro de pares de valores de propriedade. Os valores da propriedade podem ser texto ou número. Um parâmetro de registro opcional, `options`, pode ser fornecido para especificar propriedades adicionais. O registro pode conter os seguintes campos:

-   `CreateNavigationProperties` : Uma lógica (true/false) que define se as propriedades de navegação nos valores retornados serão geradas (o padrão é true).
-   `NavigationPropertyNameGenerator` : Uma função usada para a criação de nomes de propriedades de navegação.
-   `Query` : Uma consulta SQL nativa usada para recuperar dados. Se a consulta produzir vários conjuntos de resultados, somente o primeiro será retornado.
-   `HierarchicalNavigation` : Uma lógica (true/false) que define se as tabelas agrupadas pelos respectivos nomes de esquema serão exibidas (o padrão é true).
-   `ConnectionTimeout` : Uma duração que controla o tempo de espera até que uma tentativa de fazer uma conexão com o servidor seja abandonada. O valor padrão depende do driver.
-   `CommandTimeout` : Uma duração que controla por quanto tempo a consulta do servidor tem permissão para ser executada até que seja cancelada. O valor padrão é dez minutos.
-   `SqlCompatibleWindowsAuth` : Um valor lógico (true/false) que determina se as opções de cadeia de conexão compatíveis com o SQL Server devem ser produzidas para a autenticação do Windows. O valor padrão é true.

O parâmetro de registro é especificado como \[option1 = value1, option2 = value2...\] ou \[Query = "select ..."\], por exemplo.



## Category
Accessing data
