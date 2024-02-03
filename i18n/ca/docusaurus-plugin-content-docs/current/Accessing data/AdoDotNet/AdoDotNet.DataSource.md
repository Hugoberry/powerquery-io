---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


## Description

Retorna la col·lecció d&#39;esquemes per a un origen de dades ADO.NET.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Details

Retorna la col·lecció d'esquemes per a l'origen de dades ADO.NET amb el nom de proveïdor <code>providerName</code> i la cadena de connexió <code>connectionString</code>. <code>connectionString</code> pot ser text o un registre de parells de valors de propietat. Els valors de propietat poden ser text o un número. Es pot especificar un paràmetre de registre opcional, <code>options</code>, per especificar propietats addicionals. El registre pot contenir els camps següents:    <ul><li><code>CommandTimeout</code> : Duraci&#243; que controla el temps en qu&#232; la consulta del servidor es pot executar abans que es cancel&#183;li. El valor per defecte &#233;s de deu minuts.</li><li><code>SqlCompatibleWindowsAuth</code> : Un operador l&#242;gic (&quot;true&quot; o &quot;false&quot;) que determina si s&#39;han de produir opcions de cadenes de connexi&#243; compatibles amb l&#39;SQL Server per a l&#39;autenticaci&#243; del Windows. El valor predeterminat &#233;s &quot;true&quot;.</li><li><code>TypeMap</code></li></ul>



## Category
Accessing data
