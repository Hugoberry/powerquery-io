---
title: Salesforce.Data
---

# Salesforce.Data


## Description

Torna els objectes del compte del Salesforce.


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Details

Retorna els objectes del compte del Salesforce especificat a les credencials. El compte es connectarà a través de l'entorn <code>loginUrl</code> que s'hagi proporcionat. Si no se'n proporciona cap, el compte es connectarà al de producció (https://login.salesforce.com). Es pot proporcionar un paràmetre de registre opcional, <code>options</code>, per especificar propietats addicionals. El registre pot contenir els camps següents:    <ul><li><code>CreateNavigationProperties</code> : Disjunci&#243; l&#242;gica (&quot;true&quot; o &quot;false&quot;) que estableix si cal generar propietats de navegaci&#243; als valors retornats. El valor per defecte &#233;s &quot;false&quot;.</li><li><code>ApiVersion</code> : Versi&#243; de l&#39;API del Salesforce que s&#39;utilitzar&#224; per a aquesta consulta. Si no s&#39;especifica, s&#39;utilitzar&#224; la versi&#243; 29.0 de l&#39;API.</li><li><code>Timeout</code> : Duraci&#243; que controla el temps que cal esperar abans de cancel&#183;lar la sol&#183;licitud al servidor. El valor per defecte &#233;s espec&#237;fic de l&#39;origen.</li></ul>    



## Category
Accessing data
