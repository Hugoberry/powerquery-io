---
title: Sql.Database
---

# Sql.Database


Retorna uma tabela de tabelas SQL, exibições e funções armazenadas do banco de dados do SQL Server.


## Syntax

```powerquery
Sql.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Retorna uma tabela de tabelas, exibições e funções armazenadas do SQL de um banco de dados do SQL Server `database` no servidor `server`. Como alternativa, a porta pode ser especificada com o servidor, separada por uma vírgula. Um parâmetro de registro opcional, `options`, pode ser especificado para controlar as seguintes opções:

-   `Query` : Uma consulta SQL nativa usada para recuperar dados. Se a consulta produzir vários conjuntos de resultados, somente o primeiro será retornado.
-   `CreateNavigationProperties` : Uma lógica (true/false) que define se as propriedades de navegação nos valores retornados serão geradas (o padrão é true).
-   `NavigationPropertyNameGenerator` : Uma função usada para a criação de nomes de propriedades de navegação.
-   `MaxDegreeOfParallelism` : Um número que define o valor da cláusula de consulta "maxdop" na consulta SQL gerada.
-   `CommandTimeout` : Uma duração que controla por quanto tempo a consulta do servidor tem permissão para ser executada até que seja cancelada. O valor padrão é dez minutos.
-   `ConnectionTimeout` : Uma duração que controla o tempo de espera até que uma tentativa de fazer uma conexão com o servidor seja abandonada. O valor padrão depende do driver.
-   `HierarchicalNavigation` : Um lógica (true/false) que define se as tabelas agrupadas por seus nomes de esquema serão exibidas (o padrão é false).
-   `MultiSubnetFailover` : Uma lógica (true/false) que define o valor da propriedade "MultiSubnetFailover" na cadeia de conexão (o padrão é false).
-   `UnsafeTypeConversions` : Uma lógica (true/false) que, se for true, tentará dobrar as conversões de tipo, o que poderá falhar e causar a falha da consulta inteira. Não recomendado para uso geral.
-   `ContextInfo` : Um valor binário usado para definir a CONTEXT\_INFO antes de executar cada comando.
-   `OmitSRID` : Uma lógica (true/false) que, se for true, omitirá o SRID ao produzir um Texto Bem Conhecido de tipos geométricos e geográficos.
-   `EnableCrossDatabaseFolding` : Um valor lógico (verdadeiro/falso) que, se verdadeiro, permite consultar bancos de dados de hectare dobrados no mesmo servidor. O valor padrão é falso.

O parâmetro de registro é especificado como \[option1 = value1, option2 = value2...\] ou \[Query = "select ..."\], por exemplo.



## Category
Accessing data
