---
title: AdoDotNet.Query
---

# AdoDotNet.Query


## Description

Retorna el resultat de l&#39;execució d&#39;una consulta nativa en un origen de dades ADO.NET.


## Syntax

```powerquery
AdoDotNet.Query(
    providerName as text,
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Details

Retorna el resultat d'executar <code>query</code> amb la cadena de connexió <code>connectionString</code> mitjançant el proveïdor ADO.NET <code>providerName</code>. <code>connectionString</code> pot ser un text o un registre de parells de valor de propietat. Els valors de propietat poden ser de text o numèrics. Es pot especificar un paràmetre de registre opcional, <code>options</code>, per especificar propietats addicionals. El registre pot contenir els camps següents:    <ul><li><code>CommandTimeout</code> : Duraci&#243; que controla el temps en qu&#232; la consulta del servidor es pot executar abans que es cancel&#183;li. El valor per defecte &#233;s de deu minuts.</li><li><code>SqlCompatibleWindowsAuth</code> : Un operador l&#242;gic (&quot;true&quot; o &quot;false&quot;) que determina si s&#39;han de produir opcions de cadenes de connexi&#243; compatibles amb l&#39;SQL Server per a l&#39;autenticaci&#243; del Windows. El valor predeterminat &#233;s &quot;true&quot;.</li></ul>



## Category
Accessing data
