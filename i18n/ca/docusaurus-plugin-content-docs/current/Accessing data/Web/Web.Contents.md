---
title: Web.Contents
---

# Web.Contents


## Description

Retorna els continguts baixats de l&#39;URL com a binaris.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Details

Retorna el contingut baixat de <code>url</code> com a valor binari. Es pot proporcionar un paràmetre de registre opcional, <code>options</code>, per especificar propietats addicionals. El registre pot contenir els camps següents:    <ul><li><code>Query</code> : Permet afegir de manera programada par&#224;metres de consulta a l&#39;URL sense que us h&#224;giu de preocupar dels car&#224;cters d&#39;escapada.</li><li><code>ApiKeyName</code> : Si el lloc de destinaci&#243; t&#233; nocions d&#39;una clau d&#39;API, aquest par&#224;metre es pot utilitzar per especificar el nom (no el valor) del par&#224;metre clau que s&#39;ha d&#39;utilitzar a l&#39;URL. El valor clau real es proporciona a la credencial.</li><li><code>Headers</code> : Si especifiqueu aquest valor com a registre, se subministraran cap&#231;aleres addicionals a una sol&#183;licitud HTTP.</li><li><code>Timeout</code> : Si especifiqueu aquest valor com a duraci&#243;, es canviar&#224; el temps d&#39;espera d&#39;una sol&#183;licitud HTTP. El valor per defecte &#233;s de 100&#160;segons.</li><li><code>ExcludedFromCacheKey</code> : Si especifiqueu aquest valor com a llista, s&#39;exclouran aquestes claus de la cap&#231;alera HTTP per tal que no formin part del c&#224;lcul de les dades d&#39;emmagatzematge a la mem&#242;ria cau.</li><li><code>IsRetry</code> : Si especifiqueu aquest valor l&#242;gic com a &quot;true&quot;, s&#39;ignorar&#224; qualsevol resposta existent a la mem&#242;ria cau en recollir les dades.</li><li><code>ManualStatusHandling</code> : Si especifiqueu aquest valor com a llista, evitareu qualsevol administraci&#243; integrada de les sol&#183;licituds HTTP la resposta de les quals tingui un d&#39;aquests codis d&#39;estat.</li><li><code>RelativePath</code> : Si especifiqueu aquest valor com a text, s&#39;annexar&#224; a l&#39;URL base abans de fer la sol&#183;licitud.</li><li><code>Content</code> : Si especifiqueu aquest valor, canviar&#224; la sol&#183;licitud web de tipus GET a POST i s&#39;utilitzar&#224; el valor de l&#39;opci&#243; com a contingut de la sol&#183;licitud POST.</li></ul>    La sol·licitud HTTP es fa com a GET (quan no s'especifica contingut) o com a POST (quan hi ha contingut). Les sol·licituds POST només es poden fer de manera anònima.    <br />    Les capçaleres de la resposta HTTP estan disponibles com a metadades al resultat binari. Fora d'un context de connector de dades personalitzat, només hi ha disponible un subconjunt de capçaleres de resposta (per motius de seguretat).    


## Examples

### Example #1 
Recupereu el contingut de &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; amb les opcions RelativePath i Query. Aquestes opcions es poden utilitzar per consultar de manera dinàmica una adreça URL base estàtica.
```powerquery
let
    searchText = "Power Query"
in
    Web.Contents(
        "https://www.bing.com",
        [
            RelativePath = "search",
            Query = [q = searchText]
        ]
    )
```

Result: 
```powerquery
binary
```


### Example #2 
Feu una sol·licitud POST per a una URL. Per fer-la, passeu una càrrega JSON binària i analitzeu la resposta com a codi JSON.
```powerquery
let
    url = ...,
    headers = [#"Content-Type" = "application/json"],
    postData = Json.FromValue([x = 235.7, y = 41.53]),
    response = Web.Contents(
        url,
        [
            Headers = headers,
            Content = postData
        ]
    ),
    jsonResponse = Json.Document(response)
in
    jsonResponse
```

Result: 
```powerquery
table
```


### Example #3 
Connecteu-vos a una adreça URL segura que accepti una clau d&#39;autenticació com a part de la seva cadena de consulta. En lloc de codificar la clau secreta a M (fet que suposaria un risc de seguretat),     la clau es pot proporcionar de manera segura especificant-ne el nom (no el seu valor) a M, escollint l&#39;autenticació de l&#39;API web i especificant-hi el valor de la clau com a part de la credencial de l&#39;API web.    Quan s&#39;utilitzi d&#39;aquesta manera, l&#39;exemple següent generarà una sol·licitud per a &lt;code&gt;&#34;https://contoso.com/api/customers/get?api_key=\*\*\*\*\*\*&#34;&lt;/code&gt;.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
