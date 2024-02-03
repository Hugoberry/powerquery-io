---
title: DB2.Database
---

# DB2.Database


## Description

Retorna uma tabela de tabelas e exibições SQL disponíveis em um banco de dados Db2.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Retorna uma tabela de tabelas e exibições SQL disponíveis em um banco de dados Db2 no servidor <code>server</code>, na instância de banco de dados chamada <code>database</code>. A porta pode ser especificada opcionalmente com o servidor, separada por uma vírgula. Um parâmetro de registro opcional, <code>options</code>, pode ser especificado para controlar as seguintes opções:    <ul><li><code>CreateNavigationProperties</code> : Uma l&#243;gica (true/false) que define se as propriedades de navega&#231;&#227;o nos valores retornados ser&#227;o geradas (o padr&#227;o &#233; true).</li><li><code>NavigationPropertyNameGenerator</code> : Uma fun&#231;&#227;o usada para a cria&#231;&#227;o de nomes de propriedades de navega&#231;&#227;o.</li><li><code>Query</code> : Uma consulta SQL nativa usada para recuperar dados. Se a consulta produzir v&#225;rios conjuntos de resultados, somente o primeiro ser&#225; retornado.</li><li><code>CommandTimeout</code> : Uma dura&#231;&#227;o que controla por quanto tempo a consulta do servidor tem permiss&#227;o para ser executada at&#233; que seja cancelada. O valor padr&#227;o &#233; dez minutos.</li><li><code>ConnectionTimeout</code> : Uma dura&#231;&#227;o que controla o tempo de espera at&#233; que uma tentativa de fazer uma conex&#227;o com o servidor seja abandonada. O valor padr&#227;o depende do driver.</li><li><code>HierarchicalNavigation</code> : Um l&#243;gica (true/false) que define se as tabelas agrupadas por seus nomes de esquema ser&#227;o exibidas (o padr&#227;o &#233; false).</li><li><code>Implementation</code> : Especifica a implementa&#231;&#227;o do provedor de banco de dados interno a ser usado. Os valores v&#225;lidos s&#227;o &quot; IBM&quot; e &quot; Microsoft&quot;.</li><li><code>BinaryCodePage</code> : Um n&#250;mero para o CCSID (Identificador do Conjunto de Caracteres Codificados) para decodificar dados bin&#225;rios FOR BITS do Db2 em cadeias de caracteres. Aplica-se &#224; Implementa&#231;&#227;o = “Microsoft”. Defina 0 para desabilitar a convers&#227;o (padr&#227;o). Defina 1 para converter com base em uma codifica&#231;&#227;o de banco de dados. Defina outro n&#250;mero do CCSID para converter em codifica&#231;&#227;o de aplicativo.</li><li><code>PackageCollection</code> : Especifica um valor de cadeia para a cole&#231;&#227;o de pacotes (o padr&#227;o &#233; &quot;NULLID&quot;) para habilitar o uso de pacotes compartilhados necess&#225;rios para processar instru&#231;&#245;es SQL. Aplica-se a Implementa&#231;&#227;o = &quot; Microsoft&quot;.</li><li><code>UseDb2ConnectGateway</code> : Especifica se a conex&#227;o est&#225; sendo estabelecida por meio de um gateway do DB2 Connect. Aplica-se &#224; Implementa&#231;&#227;o = &quot;Microsoft&quot;.</li></ul>    Por exemplo, o parâmetro de registro é especificado como [option1 = value1, option2 = value2...] ou [Query = "select ..."].    



## Category
Accessing data
