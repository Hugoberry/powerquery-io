---
title: DB2.Database
---

# DB2.Database


Retorna uma tabela de tabelas e exibições SQL disponíveis em um banco de dados Db2.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Retorna uma tabela de tabelas e exibições SQL disponíveis em um banco de dados Db2 no servidor `server`, na instância de banco de dados chamada `database`. Como alternativa, a porta pode ser especificada com o servidor, separada por uma vírgula. Um parâmetro de registro opcional, `options`, pode ser especificado para controlar as seguintes opções:

-   `CreateNavigationProperties` : Uma lógica (true/false) que define se as propriedades de navegação nos valores retornados serão geradas (o padrão é true).
-   `NavigationPropertyNameGenerator` : Uma função usada para a criação de nomes de propriedades de navegação.
-   `Query` : Uma consulta SQL nativa usada para recuperar dados. Se a consulta produzir vários conjuntos de resultados, somente o primeiro será retornado.
-   `CommandTimeout` : Uma duração que controla por quanto tempo a consulta do servidor tem permissão para ser executada até que seja cancelada. O valor padrão é dez minutos.
-   `ConnectionTimeout` : Uma duração que controla o tempo de espera até que uma tentativa de fazer uma conexão com o servidor seja abandonada. O valor padrão depende do driver.
-   `HierarchicalNavigation` : Um lógica (true/false) que define se as tabelas agrupadas por seus nomes de esquema serão exibidas (o padrão é false).
-   `Implementation` : Especifica a implementação do provedor de banco de dados interno a ser usado. Os valores válidos são " IBM" e " Microsoft".
-   `BinaryCodePage` : Um número para o CCSID (Identificador do Conjunto de Caracteres Codificados) para decodificar dados binários FOR BITS do Db2 em cadeias de caracteres. Aplica-se à Implementação = “Microsoft”. Defina 0 para desabilitar a conversão (padrão). Defina 1 para converter com base em uma codificação de banco de dados. Defina outro número do CCSID para converter em codificação de aplicativo.
-   `PackageCollection` : Especifica um valor de cadeia para a coleção de pacotes (o padrão é "NULLID") para habilitar o uso de pacotes compartilhados necessários para processar instruções SQL. Aplica-se a Implementação = " Microsoft".
-   `UseDb2ConnectGateway` : Especifica se a conexão está sendo estabelecida por meio de um gateway do DB2 Connect. Aplica-se à Implementação = "Microsoft".

O parâmetro de registro é especificado como \[option1 = value1, option2 = value2...\] ou \[Query = "select ..."\], por exemplo.



## Category
Accessing data
