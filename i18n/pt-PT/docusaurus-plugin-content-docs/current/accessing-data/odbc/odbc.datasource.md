---
title: Odbc.DataSource
---

# Odbc.DataSource


Devolve uma tabela de tabelas de SQL e vistas da origem de dados ODBC.


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Devolve uma tabela de tabelas de SQL e vistas da origem de dados ODBC especificada pela cadeia de ligação `connectionString`. `connectionString` pode ser texto ou um registo de pares de valores da propriedade. Os valores da propriedade podem ser texto ou número. Poderá ser fornecido um parâmetro de registo opcional, `options`, para especificar propriedades adicionais. O registo pode conter os seguintes campos:

-   `CreateNavigationProperties` : Uma lógica (true/false) que define se são geradas as propriedades de navegação nos valores devolvidos (a predefinição é verdadeiro).
-   `HierarchicalNavigation` : Uma lógica (true/false) que define se são visualizadas as tabelas agrupadas pelos respetivos nomes de esquema (a predefinição é falso).
-   `ConnectionTimeout` : Uma duração que controla o tempo que se deve aguardar antes de abandonar uma tentativa de ligar ao servidor. O valor predefinido é 15 segundos.
-   `CommandTimeout` : Uma duração que controla o tempo em que a consulta do lado do servidor está autorizada a ser executada antes de ser cancelada. O valor predefinido é dez minutos.
-   `SqlCompatibleWindowsAuth` : Uma lógica (true/false) que determina se é para produzir opções de cadeia de ligação compatíveis com o SQL Server para a autenticação Windows. O valor predefinido é true.


## Examples

### Example #1
Devolver as tabelas e vistas SQL da cadeia de ligação fornecida.
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
