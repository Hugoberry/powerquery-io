---
title: MySQL.Database
---

# MySQL.Database


## Description

Retorna una taula de taules, visualitzacions i funcions escalars emmagatzemades SQL disponibles en una base de dades MySQL.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Retorna una taula de visualitzacions, taules i funcions escalars SQL emmagatzemades disponibles en una base de dades MySQL del servidor <code>server</code>, a la instància de base dades anomenada <code>database</code>. El port es pot especificar opcionalment amb el servidor, separat per dos punts. Es pot especificar un paràmetre de registre opcional, <code>options</code>, per controlar les opcions següents:    <ul><li><code>Encoding</code> : Valor de TextEncoding que especifica el conjunt de car&#224;cters que s&#39;ha fet servir per codificar totes les consultes enviades al servidor (el valor per defecte &#233;s &quot;null&quot;).</li><li><code>CreateNavigationProperties</code> : Disjunci&#243; l&#242;gica (&quot;true&quot; o &quot;false&quot;) que estableix si cal generar propietats de navegaci&#243; als valors retornats. El valor per defecte &#233;s &quot;true&quot;.</li><li><code>NavigationPropertyNameGenerator</code> : Funci&#243; que s&#39;utilitza per crear noms de propietats de navegaci&#243;.</li><li><code>Query</code> : Consulta SQL nativa que s&#39;utilitza per recuperar dades. Si produeix diversos conjunts de resultats, nom&#233;s se&#39;n retornar&#224; el primer.</li><li><code>CommandTimeout</code> : Duraci&#243; que controla el temps en qu&#232; la consulta del servidor es pot executar abans que es cancel&#183;li. El valor per defecte &#233;s de deu minuts.</li><li><code>ConnectionTimeout</code> : Duraci&#243; que controla el temps que cal esperar abans de cancel&#183;lar un intent per establir una connexi&#243; amb el servidor. El valor per defecte dep&#232;n del controlador.</li><li><code>TreatTinyAsBoolean</code> : Disjunci&#243; l&#242;gica (&quot;true&quot; o &quot;false&quot;) que determina si cal for&#231;ar les columnes &quot;tinyint&quot; al servidor com a valors l&#242;gics. El valor per defecte &#233;s &quot;true&quot;.</li><li><code>OldGuids</code> : Disjunci&#243; l&#242;gica (&quot;true&quot; o &quot;false&quot;) que estableix si cal tractar les columnes char(36) (&quot;si &#233;s &quot;false&quot;) o binary(16) (si &#233;s &quot;true&quot;) com a GUID. El valor per defecte &#233;s &quot;false&quot;.</li><li><code>ReturnSingleDatabase</code> : Disjunci&#243; l&#242;gica (&quot;true&quot; o &quot;false&quot;) que estableix si cal retornar totes les taules de totes les bases de dades (si &#233;s &quot;false&quot;) o b&#233; si s&#39;han de retornar les taules i les visualitzacions de la base de dades especificada (si &#233;s &quot;true&quot;). El valor per defecte &#233;s &quot;false&quot;.</li><li><code>HierarchicalNavigation</code> : Disjunci&#243; l&#242;gica (&quot;true&quot; o &quot;false&quot;) que estableix si cal visualitzar les taules agrupades pel nom d&#39;esquema. El valor per defecte &#233;s &quot;false&quot;.</li></ul>    El paràmetre de registre s'especifica com a [opció1 = valor1, opció2 = valor2...] o [consulta = "selecciona ..."], per exemple.    



## Category
Accessing data
