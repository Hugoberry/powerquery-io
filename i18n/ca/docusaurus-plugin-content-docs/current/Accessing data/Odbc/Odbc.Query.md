---
title: Odbc.Query
---

# Odbc.Query


## Description

Retorna el resultat de l&#39;execució d&#39;una consulta nativa en un origen de dades ODBC.


## Syntax

```powerquery
Odbc.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Details

Retorna el resultat d'executar <code>query</code> amb la cadena de connexió <code>connectionString</code> mitjançant l'ODBC. <code>connectionString</code> pot ser un text o un registre de parells de valors de propietat. Els valors de propietat poden ser un text o un número. Es pot proporcionar un paràmetre de registre opcional, <code>options</code>, per especificar les propietats addicionals. El registre pot contenir els camps següents:    <ul><li><code>ConnectionTimeout</code> : Duraci&#243; que controla el temps que cal esperar abans de cancel&#183;lar un intent per establir una connexi&#243; amb el servidor. El valor per defecte &#233;s de 15&#160;segons.</li><li><code>CommandTimeout</code> : Duraci&#243; que controla el temps en qu&#232; la consulta del servidor es pot executar abans que es cancel&#183;li. El valor per defecte &#233;s de deu minuts.</li><li><code>SqlCompatibleWindowsAuth</code> : Un operador l&#242;gic (&quot;true&quot; o &quot;false&quot;) que determina si s&#39;han de produir opcions de cadenes de connexi&#243; compatibles amb l&#39;SQL Server per a l&#39;autenticaci&#243; del Windows. El valor predeterminat &#233;s &quot;true&quot;.</li></ul>


## Examples

### Example #1 
Retorna el resultat d&#39;executar una consulta senzilla a la cadena de connexió proporcionada.
```powerquery
Odbc.Query("dsn=your_dsn", "select * from Customers")
```

Result: 
```powerquery
table
```




## Category
Accessing data
