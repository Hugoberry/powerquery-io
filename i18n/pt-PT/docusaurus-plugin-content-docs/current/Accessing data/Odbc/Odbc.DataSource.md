---
title: Odbc.DataSource
---

# Odbc.DataSource


Devolve uma tabela de tabelas de SQL e vistas da origem de dados ODBC.


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Devolve uma tabela de tabelas de SQL e vistas da origem de dados ODBC especificada pela cadeia de ligação <code>connectionString</code>. <code>connectionString</code> pode ser texto ou um registo de pares de valores da propriedade. Os valores da propriedade podem ser texto ou número. Poderá ser fornecido um parâmetro de registo opcional, <code>options</code>, para especificar propriedades adicionais. O registo pode conter os seguintes campos:    <ul><li><code>CreateNavigationProperties</code> : Uma l&#243;gica (true/false) que define se s&#227;o geradas as propriedades de navega&#231;&#227;o nos valores devolvidos (a predefini&#231;&#227;o &#233; verdadeiro).</li><li><code>HierarchicalNavigation</code> : Uma l&#243;gica (true/false) que define se s&#227;o visualizadas as tabelas agrupadas pelos respetivos nomes de esquema (a predefini&#231;&#227;o &#233; falso).</li><li><code>ConnectionTimeout</code> : Uma dura&#231;&#227;o que controla o tempo que se deve aguardar antes de abandonar uma tentativa de ligar ao servidor. O valor predefinido &#233; 15 segundos.</li><li><code>CommandTimeout</code> : Uma dura&#231;&#227;o que controla o tempo em que a consulta do lado do servidor est&#225; autorizada a ser executada antes de ser cancelada. O valor predefinido &#233; dez minutos.</li><li><code>SqlCompatibleWindowsAuth</code> : Uma l&#243;gica (true/false) que determina se &#233; para produzir op&#231;&#245;es de cadeia de liga&#231;&#227;o compat&#237;veis com o SQL Server para a autentica&#231;&#227;o Windows. O valor predefinido &#233; true.</li></ul>


## Examples

### Example #1 
Devolver as tabelas e vistas SQL da cadeia de ligação fornecida.
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
