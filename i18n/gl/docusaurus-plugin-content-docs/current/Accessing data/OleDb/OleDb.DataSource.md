---
title: OleDb.DataSource
---

# OleDb.DataSource


## Description

Devolve unha táboa de visualizacións e táboas SQL da orixe de datos de OLE DB.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Details

Devolve unha táboa de visualizacións e táboas SQL da orixe de datos de OLE DB especificada na cadea de conexión <code>connectionString</code>. <code>connectionString</code> pode ser texto ou un rexistro de pares de valores de propiedade. Os valores de propiedade poden ser texto ou números. Pode fornecerse un parámetro de rexistro opcional, <code>options</code>, para especificar propiedades adicionais. O rexistro pode conter os seguintes campos:    <ul><li><code>CreateNavigationProperties</code> : Unha funci&#243;n l&#243;xica (true/false) que establece se xerar propiedades de navegaci&#243;n nos valores devoltos (o valor predefinido &#233; true).</li><li><code>NavigationPropertyNameGenerator</code> : Unha funci&#243;n que se usa para crear nomes de propiedades de navegaci&#243;n.</li><li><code>Query</code> : Unha consulta SQL nativa usada para recuperar datos. Se a consulta produce varios conxuntos de resultados, s&#243; se devolver&#225; o primeiro.</li><li><code>HierarchicalNavigation</code> : Un valor l&#243;xico (true/false) que establece se ver as t&#225;boas agrupadas polos nomes de esquema (o valor predefinido &#233; true).</li><li><code>ConnectionTimeout</code> : Duraci&#243;n que controla o tempo que se debe agardar antes de abandonar un intento de conexi&#243;n co servidor. O valor predefinido depende do controlador.</li><li><code>CommandTimeout</code> : Duraci&#243;n que controla o tempo que pode executarse a consulta no servidor antes de que se cancele. O valor predefinido &#233; de dez minutos.</li><li><code>SqlCompatibleWindowsAuth</code> : Unha l&#243;xica (true/false) que determina se producir opci&#243;ns de cadea de conexi&#243;n compatibles con SQL Server para a autenticaci&#243;n de Windows. O valor predefinido &#233; true.</li></ul>    O parámetro de rexistro especifícase como [option1 = value1, option2 = value2...] ou [Query = "select ..."], por exemplo.



## Category
Accessing data
