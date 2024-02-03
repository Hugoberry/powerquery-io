---
title: Odbc.Query
---

# Odbc.Query


## Description

Devolve o resultado de executar unha consulta nativa nunha orixe de datos ODBC.


## Syntax

```powerquery
Odbc.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Details

Devolve o resultado de executar <code>query</code> coa cadea de conexión <code>connectionString</code> mediante ODBC. <code>connectionString</code> pode ser texto ou un rexistro de pares de valores de propiedade. Os valores de propiedade poden ser texto ou números. Pode fornecerse un parámetro de rexistro opcional, <code>options</code>, para especificar propiedades adicionais. O rexistro pode conter os campos seguintes:    <ul><li><code>ConnectionTimeout</code> : Duraci&#243;n que controla o tempo que se debe agardar antes de abandonar unha tentativa de conexi&#243;n co servidor. O valor predefinido &#233; de 15&#160;segundos.</li><li><code>CommandTimeout</code> : Duraci&#243;n que controla o tempo que pode executarse a consulta no servidor antes de que se cancele. O valor predefinido &#233; de dez minutos.</li><li><code>SqlCompatibleWindowsAuth</code> : Unha l&#243;xica (true/false) que determina se producir opci&#243;ns de cadea de conexi&#243;n compatibles con SQL Server para a autenticaci&#243;n de Windows. O valor predefinido &#233; true.</li></ul>


## Examples

### Example #1 
Devolve o resultado de executar una consulta sinxela fronte a cadea de conexión proporcionada.
```powerquery
Odbc.Query("dsn=your_dsn", "select * from Customers")
```

Result: 
```powerquery
table
```




## Category
Accessing data
