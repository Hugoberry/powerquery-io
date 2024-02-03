---
title: WebAction.Request
---

# WebAction.Request


## Description

Crea una acció que, en executar-se, retornarà els resultats de realitzar una sol·licitud HTTP com a valor binari.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Details

Crea una acció que, quan s'executi, retornarà els resultats de fer una sol·licitud <code>method</code> a <code>url</code> fent servir HTTP com a valor binari.    Es pot proporcionar un paràmetre de registre opcional, <code>options</code>, per especificar propietats addicionals. El registre pot contenir els camps següents:    <ul><li><code>Query</code> : Permet afegir de manera programada par&#224;metres de consulta a l&#39;URL sense que us h&#224;giu de preocupar dels car&#224;cters d&#39;escapada.</li><li><code>ApiKeyName</code> : Si el lloc de destinaci&#243; t&#233; nocions d&#39;una clau d&#39;API, aquest par&#224;metre es pot utilitzar per especificar el nom (no el valor) del par&#224;metre clau que s&#39;ha d&#39;utilitzar a l&#39;URL. El valor clau real es proporciona a la credencial.</li><li><code>Headers</code> : Si especifiqueu aquest valor com a registre, se subministraran cap&#231;aleres addicionals a una sol&#183;licitud HTTP.</li><li><code>Timeout</code> : Si especifiqueu aquest valor com a duraci&#243;, es canviar&#224; el temps d&#39;espera d&#39;una sol&#183;licitud HTTP. El valor per defecte &#233;s de 100&#160;segons.</li><li><code>ExcludedFromCacheKey</code> : Si especifiqueu aquest valor com a llista, s&#39;exclouran aquestes claus de la cap&#231;alera HTTP per tal que no formin part del c&#224;lcul de les dades d&#39;emmagatzematge a la mem&#242;ria cau.</li><li><code>IsRetry</code> : Si especifiqueu aquest valor l&#242;gic com a &quot;true&quot;, s&#39;ignorar&#224; qualsevol resposta existent a la mem&#242;ria cau en recollir les dades.</li><li><code>ManualStatusHandling</code> : Si especifiqueu aquest valor com a llista, evitareu qualsevol administraci&#243; integrada de les sol&#183;licituds HTTP la resposta de les quals tingui un d&#39;aquests codis d&#39;estat.</li><li><code>RelativePath</code> : Si especifiqueu aquest valor com a text, s&#39;annexar&#224; a l&#39;URL base abans de fer la sol&#183;licitud.</li><li><code>Content</code> : Si especifiqueu aquest valor, el seu contingut passar&#224; a ser el cos de la sol&#183;licitud HTTP.</li></ul>    <br />    Cal tenir en compte que aquesta funció està inhabilitada en la majoria de contextos. Valoreu la possibilitat de fer servir Web.Contents o Web.Headers.    


## Examples

### Example #1 
Fa una sol·licitud GET al Bing.
```powerquery
WebAction.Request(WebMethod.Get, "https://bing.com")
```

Result: 
```powerquery
Action
```




## Category
Action
