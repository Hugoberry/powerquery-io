---
title: Odbc.DataSource
---

# Odbc.DataSource


## Description

Devolve unha táboa de táboas e visualizacións SQL da orixe de datos ODBC. 


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Details

Devolve unha táboa de táboas e visualizacións SQL da orixe de datos ODBC especificada pola cadea de conexión <code>connectionString</code>. <code>connectionString</code> pode ser texto ou un rexistro de pares de valores de propiedade. Os valores de propiedade poden ser texto ou números. Pode fornecerse un parámetro de rexistro opcional, <code>options</code>, para especificar propiedades adicionais. O rexistro pode conter os campos seguintes:    <ul><li><code>CreateNavigationProperties</code> : Unha funci&#243;n l&#243;xica (true/false) que establece se xerar propiedades de navegaci&#243;n nos valores devoltos (o valor predefinido &#233; true).</li><li><code>HierarchicalNavigation</code> : Unha funci&#243;n l&#243;xica (true/false) que establece se ver as t&#225;boas agrupadas polos nomes de esquema (o valor predefinido &#233; false).</li><li><code>ConnectionTimeout</code> : Duraci&#243;n que controla o tempo que se debe agardar antes de abandonar unha tentativa de conexi&#243;n co servidor. O valor predefinido &#233; de 15&#160;segundos.</li><li><code>CommandTimeout</code> : Duraci&#243;n que controla o tempo que pode executarse a consulta no servidor antes de que se cancele. O valor predefinido &#233; de dez minutos.</li><li><code>SqlCompatibleWindowsAuth</code> : Unha l&#243;xica (true/false) que determina se producir opci&#243;ns de cadea de conexi&#243;n compatibles con SQL Server para a autenticaci&#243;n de Windows. O valor predefinido &#233; true.</li></ul>


## Examples

### Example #1 
Volve ás vistas e táboas SQL desde a cadea de conexión proporcionada.
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
