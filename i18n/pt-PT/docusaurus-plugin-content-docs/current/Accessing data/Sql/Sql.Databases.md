---
title: Sql.Databases
---

# Sql.Databases


## Description

Devolve uma tabela de bases de dados num SQL Server.


## Syntax

```powerquery
Sql.Databases(
    server as text,
    optional options as record
) as table
```


## Details

Devolve uma tabela de bases de dados no servidor SQL especificado, <code>server</code>. Pode ser especificado um parâmetro de registo opcional, <code>options</code>, para controlar as seguintes opções:    <ul><li><code>CreateNavigationProperties</code> : Uma l&#243;gica (true/false) que define se s&#227;o geradas as propriedades de navega&#231;&#227;o nos valores devolvidos (a predefini&#231;&#227;o &#233; verdadeiro).</li><li><code>NavigationPropertyNameGenerator</code> : Uma fun&#231;&#227;o que &#233; utilizada para a cria&#231;&#227;o de nomes de propriedades de navega&#231;&#227;o.</li><li><code>MaxDegreeOfParallelism</code> : Um n&#250;mero que define o valor da cl&#225;usula de consulta &quot;maxdrop&quot; na consulta SQL gerada.</li><li><code>CommandTimeout</code> : Uma dura&#231;&#227;o que controla o tempo em que a consulta do lado do servidor est&#225; autorizada a ser executada antes de ser cancelada. O valor predefinido &#233; dez minutos.</li><li><code>ConnectionTimeout</code> : Uma dura&#231;&#227;o que controla o tempo que se deve aguardar antes de abandonar uma tentativa de ligar ao servidor. O valor predefinido &#233; dependente do controlador.</li><li><code>HierarchicalNavigation</code> : Uma l&#243;gica (true/false) que define se s&#227;o visualizadas as tabelas agrupadas pelos respetivos nomes de esquema (a predefini&#231;&#227;o &#233; falso).</li><li><code>MultiSubnetFailover</code> : Uma l&#243;gica (true/false) que define o valor da propriedade &quot;MultiSubnetFailover&quot; na cadeia de liga&#231;&#227;o (a predefini&#231;&#227;o &#233; falsa).</li><li><code>UnsafeTypeConversions</code> : Um valor l&#243;gico (verdadeiro/falso) que, se for verdadeiro, tenta dobrar convers&#245;es de tipo, o que pode falhar e resultar na falha de toda a consulta. N&#227;o recomendado para utiliza&#231;&#227;o geral.</li><li><code>ContextInfo</code> : Um valor bin&#225;rio utilizado para definir o CONTEXT_INFO antes de executar cada comando.</li><li><code>OmitSRID</code> : Um valor l&#243;gico (verdadeiro/falso) que, se for verdadeiro, omite o SRID ao produzir Well-Known Text a partir de tipos de geometria e geografia.</li><li><code>EnableCrossDatabaseFolding</code> : Um valor l&#243;gico (verdadeiro/falso) que, se for verdadeiro, permite a dobragem de consultas entre bases de dados no mesmo servidor. O valor predefinido &#233; falso.</li></ul>    O parâmetro de registo é especificado como [option1 = value1, option2 = value2...], por exemplo.    <br />    Não suporta que a definição de uma consulta SQL seja executada no servidor. <code>Sql.Database</code> deve ser utilizada, ao invés de executar uma consulta SQL.    



## Category
Accessing data
