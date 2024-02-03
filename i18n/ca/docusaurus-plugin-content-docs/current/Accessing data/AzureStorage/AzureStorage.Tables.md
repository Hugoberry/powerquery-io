---
title: AzureStorage.Tables
---

# AzureStorage.Tables


## Description

Retorna una taula de navegació que conté les taules que s&#39;han trobat al compte especificat des d&#39;un dipòsit d&#39;emmagatzematge de l&#39;Azure.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Details

Retorna una taula de navegació que conté una fila per a cada taula que es troba a l'URL del compte (<code>account</code>) d'un dipòsit d'emmagatzematge de l'Azure. Cada fila conté un enllaç a la taula de l'Azure. Es pot proporcionar un paràmetre de registre opcional (<code>options</code>) per especificar propietats addicionals. El registre pot contenir els camps següents:    <ul><li><code>Timeout</code> : Duraci&#243; que controla el temps que cal esperar abans de cancel&#183;lar la sol&#183;licitud al servidor. El valor per defecte &#233;s espec&#237;fic de l&#39;origen.</li></ul>



## Category
Accessing data
