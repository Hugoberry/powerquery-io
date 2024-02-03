---
title: OleDb.DataSource
---

# OleDb.DataSource


## Description

Retorna una taula amb les visualitzacions i les taules SQL de l&#39;origen de dades OLE DB.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Details

Retorna una taula de visualitzacions i taules SQL de la font de dades OLE DB que s'hagi especificat mitjançant la cadena de connexió <code>connectionString</code>. <code>connectionString</code> pot ser text o bé un registre de parells de valors de propietat. Els valors de propietat poden ser text o bé xifres. Es pot especificar un paràmetre de registre opcional, <code>options</code>, per especificar propietats addicionals. El registre pot contenir els camps següents:    <ul><li><code>CreateNavigationProperties</code> : Disjunci&#243; l&#242;gica (&quot;true&quot; o &quot;false&quot;) que estableix si cal generar propietats de navegaci&#243; als valors retornats. El valor per defecte &#233;s &quot;true&quot;.</li><li><code>NavigationPropertyNameGenerator</code> : Funci&#243; que s&#39;utilitza per crear noms de propietats de navegaci&#243;.</li><li><code>Query</code> : Consulta SQL nativa que s&#39;utilitza per recuperar dades. Si produeix diversos conjunts de resultats, nom&#233;s se&#39;n retornar&#224; el primer.</li><li><code>HierarchicalNavigation</code> : Disjunci&#243; l&#242;gica (&quot;true&quot; o &quot;false&quot;) que estableix si cal visualitzar les taules agrupades pel nom d&#39;esquema. El valor per defecte &#233;s &quot;true&quot;.</li><li><code>ConnectionTimeout</code> : Duraci&#243; que controla el temps que cal esperar abans de cancel&#183;lar un intent per establir una connexi&#243; amb el servidor. El valor per defecte dep&#232;n del controlador.</li><li><code>CommandTimeout</code> : Duraci&#243; que controla el temps en qu&#232; la consulta del servidor es pot executar abans que es cancel&#183;li. El valor per defecte &#233;s de deu minuts.</li><li><code>SqlCompatibleWindowsAuth</code> : Un operador l&#242;gic (&quot;true&quot; o &quot;false&quot;) que determina si s&#39;han de produir opcions de cadenes de connexi&#243; compatibles amb l&#39;SQL Server per a l&#39;autenticaci&#243; del Windows. El valor predeterminat &#233;s &quot;true&quot;.</li></ul>    El paràmetre de registre s'especifica com a [opció1 = valor1, opció2 = valor2...] o bé [Consulta = "selecciona ..."], per exemple.



## Category
Accessing data
