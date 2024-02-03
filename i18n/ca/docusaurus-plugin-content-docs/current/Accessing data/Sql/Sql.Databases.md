---
title: Sql.Databases
---

# Sql.Databases


## Description

Retorna una taula de bases de dades en un SQL Server.


## Syntax

```powerquery
Sql.Databases(
    server as text,
    optional options as record
) as table
```


## Details

Retorna una taula de bases de dades al servidor SQL especificat (<code>server</code>). Es pot especificar un paràmetre de registre opcional, <code>options</code>, per controlar les opcions següents:    <ul><li><code>CreateNavigationProperties</code> : Disjunci&#243; l&#242;gica (&quot;true&quot; o &quot;false&quot;) que estableix si cal generar propietats de navegaci&#243; als valors retornats. El valor per defecte &#233;s &quot;true&quot;.</li><li><code>NavigationPropertyNameGenerator</code> : Funci&#243; que s&#39;utilitza per crear noms de propietats de navegaci&#243;.</li><li><code>MaxDegreeOfParallelism</code> : N&#250;mero que estableix el valor de la cl&#224;usula de consulta &quot;maxdop&quot; a la consulta de l&#39;SQL que s&#39;ha generat.</li><li><code>CommandTimeout</code> : Duraci&#243; que controla el temps en qu&#232; la consulta del servidor es pot executar abans que es cancel&#183;li. El valor per defecte &#233;s de deu minuts.</li><li><code>ConnectionTimeout</code> : Duraci&#243; que controla el temps que cal esperar abans de cancel&#183;lar un intent per establir una connexi&#243; amb el servidor. El valor per defecte dep&#232;n del controlador.</li><li><code>HierarchicalNavigation</code> : Disjunci&#243; l&#242;gica (&quot;true&quot; o &quot;false&quot;) que estableix si cal visualitzar les taules agrupades pel nom d&#39;esquema. El valor per defecte &#233;s &quot;false&quot;.</li><li><code>MultiSubnetFailover</code> : Disjunci&#243; l&#242;gica (&quot;true&quot; o &quot;false&quot;) que estableix el valor de la propietat &quot;MultiSubnetFailover&quot; a la cadena de connexi&#243;. El valor per defecte &#233;s &quot;false&quot;.</li><li><code>UnsafeTypeConversions</code> : Element l&#242;gic (&quot;true&quot; o &quot;false&quot;) que, si &#233;s &quot;true&quot;, intenta plegar les conversions de tipus que pot ser que produeixin un error i que impedeixin que es realitzi tota la consulta. No es recomana per a l&#39;&#250;s general.</li><li><code>ContextInfo</code> : Valor binari que s&#39;utilitza per definir l&#39;element CONTEXT_INFO abans d&#39;executar cada ordre.</li><li><code>OmitSRID</code> : Element l&#242;gic (&quot;true&quot; o &quot;false&quot;) que, si &#233;s &quot;true&quot;, omet el SRID quan es produeix una entrada de Well-Known Text de la geometria i els tipus de geografia.</li><li><code>EnableCrossDatabaseFolding</code> : Un valor l&#242;gic (true/false) que, si &#233;s true, permet fer plegament de consultes entre bases de dades al mateix servidor. El valor per defecte &#233;s false.</li></ul>    El paràmetre de registre s'especifica amb el format [opció1 = valor1, opció2 = valor2...], per exemple.    <br />    No s'admet la configuració d'una consulta de l'SQL per executar-la al servidor. En comptes d'això, per executar una consulta de l'SQL cal utilitzar <code>Sql.Database</code>.    



## Category
Accessing data
