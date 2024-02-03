---
title: Odbc.DataSource
---

# Odbc.DataSource


## Description

Retorna una taula de vistes i taules SQL de l&#39;origen de dades ODBC. 


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Details

Retorna una taula de vistes i taules SQL de l'origen de dades ODBC que especifica la cadena de connexió <code>connectionString</code>. <code>connectionString</code> pot ser un text o un registre de parells de valors de propietat. Els valors de propietat poden ser un text o un número. Es pot proporcionar un paràmetre de registre opcional, <code>options</code>, per especificar les propietats addicionals. El registre pot contenir els camps següents:    <ul><li><code>CreateNavigationProperties</code> : Disjunci&#243; l&#242;gica (&quot;true&quot; o &quot;false&quot;) que estableix si cal generar propietats de navegaci&#243; als valors retornats. El valor per defecte &#233;s &quot;true&quot;.</li><li><code>HierarchicalNavigation</code> : Disjunci&#243; l&#242;gica (&quot;true&quot; o &quot;false&quot;) que estableix si cal visualitzar les taules agrupades pel nom d&#39;esquema. El valor per defecte &#233;s &quot;false&quot;.</li><li><code>ConnectionTimeout</code> : Duraci&#243; que controla el temps que cal esperar abans de cancel&#183;lar un intent per establir una connexi&#243; amb el servidor. El valor per defecte &#233;s de 15&#160;segons.</li><li><code>CommandTimeout</code> : Duraci&#243; que controla el temps en qu&#232; la consulta del servidor es pot executar abans que es cancel&#183;li. El valor per defecte &#233;s de deu minuts.</li><li><code>SqlCompatibleWindowsAuth</code> : Un operador l&#242;gic (&quot;true&quot; o &quot;false&quot;) que determina si s&#39;han de produir opcions de cadenes de connexi&#243; compatibles amb l&#39;SQL Server per a l&#39;autenticaci&#243; del Windows. El valor predeterminat &#233;s &quot;true&quot;.</li></ul>


## Examples

### Example #1 
Retorna les taules i visualitzacions d&#39;SQL de la cadena de connexió proporcionada.
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
