---
title: Web.Headers
---

# Web.Headers


## Description

Retorna les capçaleres HTTP baixades de l&#39;URL com a valor de registre.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Details

Retorna les capçaleres baixades de <code>url</code> com a registre. Es pot proporcionar un paràmetre de registre opcional, <code>options</code>, per especificar propietats addicionals.  El registre pot contenir els camps següents:    <ul><li><code>Query</code> : Permet afegir de manera programada par&#224;metres de consulta a l&#39;URL sense que us h&#224;giu de preocupar dels car&#224;cters d&#39;escapada.</li><li><code>ApiKeyName</code> : Si el lloc de destinaci&#243; t&#233; nocions d&#39;una clau d&#39;API, aquest par&#224;metre es pot utilitzar per especificar el nom (no el valor) del par&#224;metre clau que s&#39;ha d&#39;utilitzar a l&#39;URL. El valor clau real es proporciona a la credencial.</li><li><code>Headers</code> : Si especifiqueu aquest valor com a registre, se subministraran cap&#231;aleres addicionals a una sol&#183;licitud HTTP.</li><li><code>Timeout</code> : Si especifiqueu aquest valor com a duraci&#243;, es canviar&#224; el temps d&#39;espera d&#39;una sol&#183;licitud HTTP. El valor per defecte &#233;s de 100&#160;segons.</li><li><code>ExcludedFromCacheKey</code> : Si especifiqueu aquest valor com a llista, s&#39;exclouran aquestes claus de la cap&#231;alera HTTP per tal que no formin part del c&#224;lcul de les dades d&#39;emmagatzematge a la mem&#242;ria cau.</li><li><code>IsRetry</code> : Si especifiqueu aquest valor l&#242;gic com a &quot;true&quot;, s&#39;ignorar&#224; qualsevol resposta existent a la mem&#242;ria cau en recollir les dades.</li><li><code>ManualStatusHandling</code> : Si especifiqueu aquest valor com a llista, evitareu qualsevol administraci&#243; integrada de les sol&#183;licituds HTTP la resposta de les quals tingui un d&#39;aquests codis d&#39;estat.</li><li><code>RelativePath</code> : Si especifiqueu aquest valor com a text, s&#39;annexar&#224; a l&#39;URL base abans de fer la sol&#183;licitud.</li></ul>    La sol·licitud HTTP es fa amb el mètode HEAD. Fora d'un context de connector de dades personalitzat, només hi ha disponible un subconjunt de capçaleres de resposta (per motius de seguretat).    


## Examples

### Example #1 
Recupera les capçaleres HTTP de &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; mitjançant les opcions RelativePath i Query.
```powerquery
let
    searchText = "Power Query"
in
    Web.Headers(
        "https://www.bing.com",
        [
            RelativePath = "search",
            Query = [q = searchText]
        ]
    )
```

Result: 
```powerquery
([
    #"Cache-Control" = "private, max-age=0",
    #"Content-Encoding" = "gzip",
    #"Content-Length" = "0",
    #"Content-Type" = "text/html; charset=utf-8",
    Date = "Tue, 14 Dec 2021 16:57:25 GMT",
    Expires = "Tue, 14 Dec 2021 16:56:25 GMT",
    Vary = "Accept-Encoding"
]
meta [
    Response.Status = 200
])
```




## Category
Accessing data
