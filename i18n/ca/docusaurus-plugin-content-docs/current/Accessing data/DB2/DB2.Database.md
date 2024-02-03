---
title: DB2.Database
---

# DB2.Database


## Description

Retorna una taula de taules i visualitzacions SQL disponibles en una base de dades DB2.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Retorna una taula de taules i visualitzacions de l'SQL disponibles en una base de dades DB2 del servidor <code>server</code>, a la instància de base de dades anomenada <code>database</code>. El port es pot especificar opcionalment amb el servidor, separat per dos punts. Es pot especificar un paràmetre de registre opcional, <code>options</code>, per controlar les opcions següents:    <ul><li><code>CreateNavigationProperties</code> : Disjunci&#243; l&#242;gica (&quot;true&quot; o &quot;false&quot;) que estableix si cal generar propietats de navegaci&#243; als valors retornats. El valor per defecte &#233;s &quot;true&quot;.</li><li><code>NavigationPropertyNameGenerator</code> : Funci&#243; que s&#39;utilitza per crear noms de propietats de navegaci&#243;.</li><li><code>Query</code> : Consulta SQL nativa que s&#39;utilitza per recuperar dades. Si produeix diversos conjunts de resultats, nom&#233;s se&#39;n retornar&#224; el primer.</li><li><code>CommandTimeout</code> : Duraci&#243; que controla el temps en qu&#232; la consulta del servidor es pot executar abans que es cancel&#183;li. El valor per defecte &#233;s de deu minuts.</li><li><code>ConnectionTimeout</code> : Duraci&#243; que controla el temps que cal esperar abans de cancel&#183;lar un intent per establir una connexi&#243; amb el servidor. El valor per defecte dep&#232;n del controlador.</li><li><code>HierarchicalNavigation</code> : Disjunci&#243; l&#242;gica (&quot;true&quot; o &quot;false&quot;) que estableix si cal visualitzar les taules agrupades pel nom d&#39;esquema. El valor per defecte &#233;s &quot;false&quot;.</li><li><code>Implementation</code> : Especifica la implementaci&#243; de la base de dades interna del prove&#239;dor que s&#39;ha d&#39;utilitzar. Els valors v&#224;lids s&#243;n &quot;IBM&quot; i &quot;Microsoft&quot;.</li><li><code>BinaryCodePage</code> : N&#250;mero del CCSID (identificador del joc de car&#224;cters codificats) per descodificar les dades bin&#224;ries de DB2 FOR BIT en cadenes de car&#224;cters. S&#39;aplica a Implementation = &quot;Microsoft&quot;. Definiu el valor en 0 per inhabilitar la conversi&#243; (valor per defecte) o 1 per fer-la d&#39;acord amb la codificaci&#243; de la base de dades. Tamb&#233; podeu fer servir qualsevol altre n&#250;mero de CCSID per fer la conversi&#243; segons la codificaci&#243; de l&#39;aplicaci&#243;.</li><li><code>PackageCollection</code> : Especifica un valor de cadena per a la col&#183;lecci&#243; de paquets (el valor per defecte &#233;s &quot;NULLID&quot;) per habilitar l&#39;&#250;s de paquets compartits i necessaris per processar instruccions SQL. S&#39;aplica a Implementation = &quot;Microsoft&quot;.</li><li><code>UseDb2ConnectGateway</code> : Permet especificar si la connexi&#243; s&#39;est&#224; realitzant a trav&#233;s d&#39;una passarel&#183;la del DB2 Connect. S&#39;aplica a la implementaci&#243; &quot;Microsoft&quot;.</li></ul>    El paràmetre de registre s'especifica com a [opció1 = valor1, opció2 = valor2...] o [Consulta = "selecciona ..."], per exemple.    



## Category
Accessing data
