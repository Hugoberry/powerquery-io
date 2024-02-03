---
title: Odbc.DataSource
---

# Odbc.DataSource


## Description

Retorna uma tabela de tabelas SQL e exibições da fonte de dados ODBC. 


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Details

Retorna uma tabela de tabelas SQL e exibições da fonte de dados ODBC especificada pela cadeia de conexão <code>connectionString</code>. <code>connectionString</code> pode ser texto ou um registo de pares de valores da propriedade. Os valores da propriedade podem ser texto ou número. Um parâmetro de registro opcional, <code>options</code>, pode ser fornecido para especificar propriedades adicionais. O registro pode conter os seguintes campos:    <ul><li><code>CreateNavigationProperties</code> : Uma l&#243;gica (true/false) que define se as propriedades de navega&#231;&#227;o nos valores retornados ser&#227;o geradas (o padr&#227;o &#233; true).</li><li><code>HierarchicalNavigation</code> : Um l&#243;gica (true/false) que define se as tabelas agrupadas por seus nomes de esquema ser&#227;o exibidas (o padr&#227;o &#233; false).</li><li><code>ConnectionTimeout</code> : Uma dura&#231;&#227;o que controla o tempo de espera at&#233; que uma tentativa de fazer uma conex&#227;o com o servidor seja abandonada. O valor padr&#227;o &#233; 15 segundos.</li><li><code>CommandTimeout</code> : Uma dura&#231;&#227;o que controla por quanto tempo a consulta do servidor tem permiss&#227;o para ser executada at&#233; que seja cancelada. O valor padr&#227;o &#233; dez minutos.</li><li><code>SqlCompatibleWindowsAuth</code> : Um valor l&#243;gico (true/false) que determina se as op&#231;&#245;es de cadeia de conex&#227;o compat&#237;veis com o SQL Server devem ser produzidas para a autentica&#231;&#227;o do Windows. O valor padr&#227;o &#233; true.</li></ul>


## Examples

### Example #1 
Retorna as tabelas e exibições SQL da cadeia de conexão fornecida.
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
