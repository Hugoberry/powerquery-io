---
title: Teradata.Database
---

# Teradata.Database


## Description

Retorna una taula de taules i visualitzacions SQL a partir de la base de dades Teradata.


## Syntax

```powerquery
Teradata.Database(
    server as text,
    optional options as record
) as table
```


## Details

Retorna una taula de taules i visualitzacions de l'SQL a partir de la base de dades Teradata del servidor <code>server</code>. El port es pot especificar opcionalment amb el servidor, separat per dos punts. Es pot especificar un paràmetre de registre opcional, <code>options</code>, per controlar les opcions següents:    <ul><li><code>CreateNavigationProperties</code> : Disjunci&#243; l&#242;gica (&quot;true&quot; o &quot;false&quot;) que estableix si cal generar propietats de navegaci&#243; als valors retornats. El valor per defecte &#233;s &quot;true&quot;.</li><li><code>NavigationPropertyNameGenerator</code> : Funci&#243; que s&#39;utilitza per crear noms de propietats de navegaci&#243;.</li><li><code>Query</code> : Consulta SQL nativa que s&#39;utilitza per recuperar dades. Si produeix diversos conjunts de resultats, nom&#233;s se&#39;n retornar&#224; el primer.</li><li><code>CommandTimeout</code> : Duraci&#243; que controla el temps en qu&#232; la consulta del servidor es pot executar abans que es cancel&#183;li. El valor per defecte &#233;s de deu minuts.</li><li><code>ConnectionTimeout</code> : Duraci&#243; que controla el temps que cal esperar abans de cancel&#183;lar un intent per establir una connexi&#243; amb el servidor. El valor per defecte dep&#232;n del controlador.</li><li><code>HierarchicalNavigation</code> : Disjunci&#243; l&#242;gica (&quot;true&quot; o &quot;false&quot;) que estableix si cal visualitzar les taules agrupades pel nom d&#39;esquema. El valor per defecte &#233;s &quot;false&quot;.</li></ul>    El paràmetre de registre s'especifica com a [opció1 = valor1, opció2 = valor2...] o [consulta = "selecciona ..."], per exemple.    



## Category
Accessing data
