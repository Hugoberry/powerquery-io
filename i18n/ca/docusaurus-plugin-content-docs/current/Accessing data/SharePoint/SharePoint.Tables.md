---
title: SharePoint.Tables
---

# SharePoint.Tables


## Description

Retorna una taula que inclou contingut d&#39;una llista del SharePoint.


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Details

Retorna una taula que conté una fila per a cada element de llista que hi ha a la llista del SharePoint especificada, <code>url</code>. Cada fila conté propietats de la llista. Es pot especificar <code>options</code> per controlar les opcions següents:    <ul><li><code>ApiVersion</code> : N&#250;mero (14 o 15) o text &quot;Auto&quot; que especifica la versi&#243; de l&#39;API del SharePoint que s&#39;utilitzar&#224; en aquest lloc. Si no s’especifica o no es pot detectar, s&#39;utilitzar&#224; la versi&#243; 14 de l&#39;API. Si s&#39;especifica &quot;Auto&quot;, la versi&#243; del servidor es detectar&#224; autom&#224;ticament. Els llocs del SharePoint que no estiguin en angl&#232;s necessiten, com a m&#237;nim, la versi&#243; 15.</li><li><code>Implementation</code> : Opcional. Especifica quina versi&#243; del connector del SharePoint s&#39;utilitzar&#224;. Els valors acceptats s&#243;n &quot;2.0&quot; o nul. Si el valor &#233;s &quot;2.0&quot;, s&#39;utilitzar&#224; la implementaci&#243; 2.0 del connector del SharePoint. Si el valor &#233;s nul, s&#39;utilitzar&#224; la implementaci&#243; original del connector del SharePoint.</li><li><code>ViewMode</code> : Opcional. Aquesta opci&#243; nom&#233;s &#233;s v&#224;lida per a la implementaci&#243; 2.0. Els valors acceptats s&#243;n &quot;Totes&quot; i &quot;Per defecte&quot;. Si no s&#39;especifica cap valor, el valor es defineix com a &quot;Totes&quot;. Quan s&#39;especifica &quot;Totes&quot;, la visualitzaci&#243; inclou totes les columnes creades per usuaris i definides pel sistema. Quan s&#39;especifica &quot;Per defecte&quot;, la visualitzaci&#243; coincidir&#224; amb el que veu l&#39;usuari en mirar la llista en l&#237;nia, amb la visualitzaci&#243; que l&#39;usuari hagi definit com a predeterminada a la seva configuraci&#243;. Si l&#39;usuari edita la visualitzaci&#243; per defecte per afegir o suprimir columnes creades per usuaris o definides pel sistema, o creant una visualitzaci&#243; nova i configurant-la com a visualitzaci&#243; per defecte, aquests canvis es propagaran pel connector.</li><li><code>DisableAppendNoteColumns</code> : Impedeix que el connector utilitzi un extrem independent per a les columnes de notes.</li></ul>    



## Category
Accessing data
