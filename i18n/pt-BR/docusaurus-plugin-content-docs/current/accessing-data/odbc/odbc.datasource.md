---
title: Odbc.DataSource
---

# Odbc.DataSource


Retorna uma tabela de tabelas SQL e exibições da fonte de dados ODBC.


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Retorna uma tabela de tabelas SQL e exibições da fonte de dados ODBC especificada pela cadeia de conexão `connectionString`. `connectionString` pode ser texto ou um registo de pares de valores da propriedade. Os valores da propriedade podem ser texto ou número. Um parâmetro de registro opcional, `options`, pode ser fornecido para especificar propriedades adicionais. O registro pode conter os seguintes campos:

-   `CreateNavigationProperties` : Uma lógica (true/false) que define se as propriedades de navegação nos valores retornados serão geradas (o padrão é true).
-   `HierarchicalNavigation` : Um lógica (true/false) que define se as tabelas agrupadas por seus nomes de esquema serão exibidas (o padrão é false).
-   `ConnectionTimeout` : Uma duração que controla o tempo de espera até que uma tentativa de fazer uma conexão com o servidor seja abandonada. O valor padrão é 15 segundos.
-   `CommandTimeout` : Uma duração que controla por quanto tempo a consulta do servidor tem permissão para ser executada até que seja cancelada. O valor padrão é dez minutos.
-   `SqlCompatibleWindowsAuth` : Um valor lógico (true/false) que determina se as opções de cadeia de conexão compatíveis com o SQL Server devem ser produzidas para a autenticação do Windows. O valor padrão é true.


## Examples

### Example #1
Retorna as tabelas e exibições SQL da cadeia de conexão fornecida.
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
