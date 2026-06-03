---
title: DB2.Database
---

# DB2.Database


Devolve uma tabela de tabelas e vistas SQL disponíveis numa base de dados Db2.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Devolve uma tabela de tabelas e vistas SQL disponíveis numa base de dados Db2 no servidor `server`, na instância de base de dados denominada `database`. A porta pode ser especificada opcionalmente com o servidor, separada por dois-pontos. Pode ser especificado um parâmetro de registo opcional, `options`, para controlar as seguintes opções:

-   `CreateNavigationProperties` : Uma lógica (true/false) que define se são geradas as propriedades de navegação nos valores devolvidos (a predefinição é verdadeiro).
-   `NavigationPropertyNameGenerator` : Uma função que é utilizada para a criação de nomes de propriedades de navegação.
-   `Query` : Uma consulta SQL nativa utilizada para obter dados. Se a consulta produz vários conjuntos de resultados, apenas o primeiro vai ser devolvido.
-   `CommandTimeout` : Uma duração que controla o tempo em que a consulta do lado do servidor está autorizada a ser executada antes de ser cancelada. O valor predefinido é dez minutos.
-   `ConnectionTimeout` : Uma duração que controla o tempo que se deve aguardar antes de abandonar uma tentativa de ligar ao servidor. O valor predefinido é dependente do controlador.
-   `HierarchicalNavigation` : Uma lógica (true/false) que define se são visualizadas as tabelas agrupadas pelos respetivos nomes de esquema (a predefinição é falso).
-   `Implementation` : Especifica a implementação do fornecedor de base de dados interna a utilizar. Os valores válidos são: "IBM" e "Microsoft".
-   `BinaryCodePage` : Um número para o CCSID (Coded Character Set Identifier) descodificar os dados binários Db2 FOR BIT em cadeias de carateres. Aplica-se à Implementação = "Microsoft". Defina 0 para desativar a conversão (predefinição). Defina 1 para converter com base na codificação da base de dados. Defina outro número de CCSID para converter em codificação de aplicação.
-   `PackageCollection` : Especifica um valor de cadeia para a coleção de pacote (a predefinição é "NULLID") para permitir a utilização de pacotes partilhados necessários para processar instruções SQL. Aplica-se à Implementação = "Microsoft".
-   `UseDb2ConnectGateway` : Especifica se a ligação está a ser efetuada através de um gateway de ligação DB2. Aplica-se a Implementação = "Microsoft".

O parâmetro de registo é especificado como \[option1 = value1, option2 = value2...\] ou \[Query = "select ..."\], por exemplo.



## Category
Accessing data
