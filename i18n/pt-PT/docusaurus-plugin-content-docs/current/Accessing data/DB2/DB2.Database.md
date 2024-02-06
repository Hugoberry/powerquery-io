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

Devolve uma tabela de tabelas e vistas SQL disponíveis numa base de dados Db2 no servidor <code>server</code> na instância da base de dados com o nome <code>database</code>. A porta poderá ser especificada de forma opcional com o servidor, separada por dois pontos. É possível especificar um parâmetro de registo opcional, <code>options</code>, para controlar as seguintes opções:    <ul><li><code>CreateNavigationProperties</code> : Uma l&#243;gica (true/false) que define se s&#227;o geradas as propriedades de navega&#231;&#227;o nos valores devolvidos (a predefini&#231;&#227;o &#233; verdadeiro).</li><li><code>NavigationPropertyNameGenerator</code> : Uma fun&#231;&#227;o que &#233; utilizada para a cria&#231;&#227;o de nomes de propriedades de navega&#231;&#227;o.</li><li><code>Query</code> : Uma consulta SQL nativa utilizada para obter dados. Se a consulta produz v&#225;rios conjuntos de resultados, apenas o primeiro vai ser devolvido.</li><li><code>CommandTimeout</code> : Uma dura&#231;&#227;o que controla o tempo em que a consulta do lado do servidor est&#225; autorizada a ser executada antes de ser cancelada. O valor predefinido &#233; dez minutos.</li><li><code>ConnectionTimeout</code> : Uma dura&#231;&#227;o que controla o tempo que se deve aguardar antes de abandonar uma tentativa de ligar ao servidor. O valor predefinido &#233; dependente do controlador.</li><li><code>HierarchicalNavigation</code> : Uma l&#243;gica (true/false) que define se s&#227;o visualizadas as tabelas agrupadas pelos respetivos nomes de esquema (a predefini&#231;&#227;o &#233; falso).</li><li><code>Implementation</code> : Especifica a implementa&#231;&#227;o do fornecedor de base de dados interna a utilizar. Os valores v&#225;lidos s&#227;o: &quot;IBM&quot; e &quot;Microsoft&quot;.</li><li><code>BinaryCodePage</code> : Um n&#250;mero para o CCSID (Coded Character Set Identifier) descodificar os dados bin&#225;rios Db2 FOR BIT em cadeias de carateres. Aplica-se &#224; Implementa&#231;&#227;o = &quot;Microsoft&quot;. Defina 0 para desativar a convers&#227;o (predefini&#231;&#227;o). Defina 1 para converter com base na codifica&#231;&#227;o da base de dados. Defina outro n&#250;mero de CCSID para converter em codifica&#231;&#227;o de aplica&#231;&#227;o.</li><li><code>PackageCollection</code> : Especifica um valor de cadeia para a cole&#231;&#227;o de pacote (a predefini&#231;&#227;o &#233; &quot;NULLID&quot;) para permitir a utiliza&#231;&#227;o de pacotes partilhados necess&#225;rios para processar instru&#231;&#245;es SQL. Aplica-se &#224; Implementa&#231;&#227;o = &quot;Microsoft&quot;.</li><li><code>UseDb2ConnectGateway</code> : Especifica se a liga&#231;&#227;o est&#225; a ser efetuada atrav&#233;s de um gateway de liga&#231;&#227;o DB2. Aplica-se a Implementa&#231;&#227;o = &quot;Microsoft&quot;.</li></ul>    O parâmetro de registo é especificado como [option1 = value1, option2 = value2...] ou [Query = "select ..."] por exemplo.    



## Category
Accessing data
