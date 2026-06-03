---
title: Sql.Database
---

# Sql.Database


Devolve uma tabela de tabelas, vistas e funções armazenadas SQL a partir da base de dados do SQL Server.


## Syntax

```powerquery
Sql.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Devolve uma tabela de tabelas SQL, vistas e funções armazenadas da base de dados do SQL Server `database` no servidor `server`. A porta pode ser especificada opcionalmente com o servidor, separada por dois-pontos ou por vírgula. Pode ser especificado um parâmetro de registo opcional, `options`, para controlar as seguintes opções:

-   `Query` : Uma consulta SQL nativa utilizada para obter dados. Se a consulta produz vários conjuntos de resultados, apenas o primeiro vai ser devolvido.
-   `CreateNavigationProperties` : Uma lógica (true/false) que define se são geradas as propriedades de navegação nos valores devolvidos (a predefinição é verdadeiro).
-   `NavigationPropertyNameGenerator` : Uma função que é utilizada para a criação de nomes de propriedades de navegação.
-   `MaxDegreeOfParallelism` : Um número que define o valor da cláusula de consulta "maxdrop" na consulta SQL gerada.
-   `CommandTimeout` : Uma duração que controla o tempo em que a consulta do lado do servidor está autorizada a ser executada antes de ser cancelada. O valor predefinido é dez minutos.
-   `ConnectionTimeout` : Uma duração que controla o tempo que se deve aguardar antes de abandonar uma tentativa de ligar ao servidor. O valor predefinido é dependente do controlador.
-   `HierarchicalNavigation` : Uma lógica (true/false) que define se são visualizadas as tabelas agrupadas pelos respetivos nomes de esquema (a predefinição é falso).
-   `MultiSubnetFailover` : Uma lógica (true/false) que define o valor da propriedade "MultiSubnetFailover" na cadeia de ligação (a predefinição é falsa).
-   `UnsafeTypeConversions` : Um valor lógico (verdadeiro/falso) que, se for verdadeiro, tenta dobrar conversões de tipo, o que pode falhar e resultar na falha de toda a consulta. Não recomendado para utilização geral.
-   `ContextInfo` : Um valor binário utilizado para definir o CONTEXT\_INFO antes de executar cada comando.
-   `OmitSRID` : Um valor lógico (verdadeiro/falso) que, se for verdadeiro, omite o SRID ao produzir Well-Known Text a partir de tipos de geometria e geografia.
-   `EnableCrossDatabaseFolding` : Um valor lógico (verdadeiro/falso) que, se for verdadeiro, permite a dobragem de consultas entre bases de dados no mesmo servidor. O valor predefinido é falso.

O parâmetro de registo é especificado como \[option1 = value1, option2 = value2...\] ou \[Query = "select ..."\], por exemplo.



## Category
Accessing data
