---
title: OleDb.DataSource
---

# OleDb.DataSource


Devolve uma tabela de tabelas SQL e vistas da origem de dados OLE DB.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Devolve uma tabela de tabelas e vistas SQL da origem de dados OLE DB especificada pela cadeia de ligação `connectionString`. `connectionString` pode ser texto ou um registo de pares de valor de propriedade. Os valores de propriedade podem ser texto ou número. Pode ser fornecido um parâmetro de registo opcional, `options`, para especificar propriedades adicionais. O registo pode conter os seguintes campos:

-   `CreateNavigationProperties` : Uma lógica (true/false) que define se são geradas as propriedades de navegação nos valores devolvidos (a predefinição é verdadeiro).
-   `NavigationPropertyNameGenerator` : Uma função que é utilizada para a criação de nomes de propriedades de navegação.
-   `Query` : Uma consulta SQL nativa utilizada para obter dados. Se a consulta produz vários conjuntos de resultados, apenas o primeiro vai ser devolvido.
-   `HierarchicalNavigation` : Uma lógica (true/false) que define se são visualizadas as tabelas agrupadas pelos respetivos nomes de esquema (a predefinição é true).
-   `ConnectionTimeout` : Uma duração que controla o tempo que se deve aguardar antes de abandonar uma tentativa de ligar ao servidor. O valor predefinido é dependente do controlador.
-   `CommandTimeout` : Uma duração que controla o tempo em que a consulta do lado do servidor está autorizada a ser executada antes de ser cancelada. O valor predefinido é dez minutos.
-   `SqlCompatibleWindowsAuth` : Uma lógica (true/false) que determina se é para produzir opções de cadeia de ligação compatíveis com o SQL Server para a autenticação Windows. O valor predefinido é true.

O parâmetro de registo é especificado como \[option1 = value1, option2 = value2...\] ou \[Query = "select ..."\], por exemplo.



## Category
Accessing data
