---
title: SharePoint.Files
---

# SharePoint.Files


## Description

Retorna una taula que conté documents d&#39;un lloc del SharePoint.


## Syntax

```powerquery
SharePoint.Files(
    url as text,
    optional options as record
) as table
```


## Details

Retorna una taula que conté una fila per a cada document que hi ha al lloc del SharePoint especificat, <code>url</code>, i les subcarpetes. Cada fila conté propietats de la carpeta o del fitxer i un enllaç al contingut. Es pot especificar <code>options</code> per controlar les opcions següents:    <ul><li><code>ApiVersion</code> : N&#250;mero (14 o 15) o text &quot;Auto&quot; que especifica la versi&#243; de l&#39;API del SharePoint que s&#39;utilitzar&#224; en aquest lloc. Si no s’especifica o no es pot detectar, s&#39;utilitzar&#224; la versi&#243; 14 de l&#39;API. Si s&#39;especifica &quot;Auto&quot;, la versi&#243; del servidor es detectar&#224; autom&#224;ticament. Els llocs del SharePoint que no estiguin en angl&#232;s necessiten, com a m&#237;nim, la versi&#243; 15.</li></ul>    



## Category
Accessing data
