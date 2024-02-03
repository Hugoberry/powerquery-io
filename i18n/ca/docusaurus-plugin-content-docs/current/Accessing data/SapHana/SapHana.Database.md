---
title: SapHana.Database
---

# SapHana.Database


## Description

Retorna els paquets en una base de dades SAP HANA.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Details

Retorna una taula de paquets multidimensionals de la base de dades SAP HANA <code>server</code>. Es pot especificar un paràmetre de registre opcional, <code>options</code>, per controlar les opcions següents:    <ul><li><code>Query</code> : Consulta SQL nativa que s&#39;utilitza per recuperar dades. Si produeix diversos conjunts de resultats, nom&#233;s se&#39;n retornar&#224; el primer.</li><li><code>Distribution</code> : Element SapHanaDistribution que defineix el valor de la propietat &quot;Distribution&quot; a la cadena de connexi&#243;. L&#39;encaminament d&#39;instruccions &#233;s el m&#232;tode d&#39;avaluaci&#243; del node de servidor correcte d&#39;un sistema distribu&#239;t abans de l&#39;execuci&#243; de la instrucci&#243;. El valor per defecte &#233;s SapHanaDistribution.All.</li><li><code>Implementation</code> : Permet especificar la implementaci&#243; del connector SAP HANA que es far&#224; servir.</li><li><code>EnableColumnBinding</code> : Enlla&#231;ar variables a les columnes d&#39;un conjunt de resultats SAP Hana a l&#39;hora d&#39;obtenir dades pot millorar el rendiment potencialment a cost d&#39;un &#250;s de la mem&#242;ria una mica m&#233;s alt. El valor per defecte &#233;s fals.</li><li><code>ConnectionTimeout</code> : Duraci&#243; que controla el temps que cal esperar abans de cancel&#183;lar un intent per establir una connexi&#243; amb el servidor. El valor per defecte &#233;s de 15&#160;segons.</li><li><code>CommandTimeout</code> : Duraci&#243; que controla el temps en qu&#232; la consulta del servidor es pot executar abans que es cancel&#183;li. El valor per defecte &#233;s de deu minuts.</li></ul>    



## Category
Accessing data
