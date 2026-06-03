---
title: MySQL.Database
---

# MySQL.Database


Retorna uma tabela de tabelas, exibições e funções escalares armazenadas do SQL disponíveis em um banco de dados MySQL.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Retorna uma tabela de tabelas, exibições e funções escalares armazenadas do SQL disponíveis em um banco de dados MySQL, no servidor `server`, na instância de banco de dados chamada `database`. Como alternativa, a porta pode ser especificada com o servidor, separada por uma vírgula. Um parâmetro de registro opcional, `options`, pode ser especificado para controlar as seguintes opções:

-   `Encoding` : Um valor de TextEncoding que especifica o conjunto de caracteres usado para codificar todas as consultas enviadas ao servidor (o padrão é nulo).
-   `CreateNavigationProperties` : Uma lógica (true/false) que define se as propriedades de navegação nos valores retornados serão geradas (o padrão é true).
-   `NavigationPropertyNameGenerator` : Uma função usada para a criação de nomes de propriedades de navegação.
-   `Query` : Uma consulta SQL nativa usada para recuperar dados. Se a consulta produzir vários conjuntos de resultados, somente o primeiro será retornado.
-   `CommandTimeout` : Uma duração que controla por quanto tempo a consulta do servidor tem permissão para ser executada até que seja cancelada. O valor padrão é dez minutos.
-   `ConnectionTimeout` : Uma duração que controla o tempo de espera até que uma tentativa de fazer uma conexão com o servidor seja abandonada. O valor padrão depende do driver.
-   `TreatTinyAsBoolean` : Uma lógica (true/false) que determina se será necessário forçar as colunas tinyint no servidor como valores lógicos. O valor padrão é true.
-   `OldGuids` : Uma lógica (true/false) que define se as colunas char(36) (em caso de false) ou binary(16) (em caso de true) serão tratadas como GUIDs. O valor padrão é false.
-   `ReturnSingleDatabase` : Uma lógica (true/false) que define se todas as tabelas de todos os banco de dados serão retornadas (em caso de false) ou se as tabelas e visualizações do banco de dados especificado serão retornadas (em caso de true). O valor padrão é false.
-   `HierarchicalNavigation` : Um lógica (true/false) que define se as tabelas agrupadas por seus nomes de esquema serão exibidas (o padrão é false).

O parâmetro de registro é especificado como \[option1 = value1, option2 = value2...\] ou \[Query = "select ..."\], por exemplo.



## Category
Accessing data
