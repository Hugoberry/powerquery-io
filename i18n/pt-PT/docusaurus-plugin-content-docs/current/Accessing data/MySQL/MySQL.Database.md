---
title: MySQL.Database
---

# MySQL.Database


## Description

Devolve uma tabela de tabelas, vistas e funções escalares armazenadas SQL disponíveis numa base de dados MySQL.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Devolve uma tabela de tabelas, vistas e funções escalares armazenadas SQL disponíveis numa base de dados MySQL no servidor <code>server</code> na instância de base de dados com o nome <code>database</code>. A porta pode ser opcionalmente especificada com o servidor, separada por dois pontos. É possível especificar um parâmetro de registo opcional, <code>options</code>, para controlar as seguintes opções:    <ul><li><code>Encoding</code> : Um valor de TextEncoding que especifica o conjunto de carateres utilizado para codificar todas as consultas enviadas para o servidor (a predefini&#231;&#227;o &#233; nulo).</li><li><code>CreateNavigationProperties</code> : Uma l&#243;gica (true/false) que define se s&#227;o geradas as propriedades de navega&#231;&#227;o nos valores devolvidos (a predefini&#231;&#227;o &#233; verdadeiro).</li><li><code>NavigationPropertyNameGenerator</code> : Uma fun&#231;&#227;o que &#233; utilizada para a cria&#231;&#227;o de nomes de propriedades de navega&#231;&#227;o.</li><li><code>Query</code> : Uma consulta SQL nativa utilizada para obter dados. Se a consulta produz v&#225;rios conjuntos de resultados, apenas o primeiro vai ser devolvido.</li><li><code>CommandTimeout</code> : Uma dura&#231;&#227;o que controla o tempo em que a consulta do lado do servidor est&#225; autorizada a ser executada antes de ser cancelada. O valor predefinido &#233; dez minutos.</li><li><code>ConnectionTimeout</code> : Uma dura&#231;&#227;o que controla o tempo que se deve aguardar antes de abandonar uma tentativa de ligar ao servidor. O valor predefinido &#233; dependente do controlador.</li><li><code>TreatTinyAsBoolean</code> : Uma l&#243;gica (true/false) que determina se s&#227;o for&#231;adas as colunas tinyint no servidor como valores l&#243;gicos. O valor predefinido &#233; true.</li><li><code>OldGuids</code> : Uma l&#243;gica (true/false) que define se as colunas char(36) (se false) ou colunas bin&#225;rias(16) (se true) v&#227;o ser tratadas como GUIDs. O valor predefinido &#233; false.</li><li><code>ReturnSingleDatabase</code> : Uma l&#243;gica (true/false) que define se s&#227;o devolvidas todas as tabelas de todas as bases de dados (se false) ou se s&#227;o devolvidas tabelas e vistas da base de dados especificada (se true). O valor predefinido &#233; false.</li><li><code>HierarchicalNavigation</code> : Uma l&#243;gica (true/false) que define se s&#227;o visualizadas as tabelas agrupadas pelos respetivos nomes de esquema (a predefini&#231;&#227;o &#233; falso).</li></ul>    O parâmetro de registo é especificado como [option1 = value1, option2 = value2...] ou [Query = "select ..."] por exemplo.    



## Category
Accessing data
