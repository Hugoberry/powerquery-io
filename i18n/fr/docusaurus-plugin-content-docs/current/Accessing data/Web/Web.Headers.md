---
title: Web.Headers
---

# Web.Headers


## Description

Retourne les en-têtes HTTP téléchargés à partir de l’URL sous forme de valeur d’enregistrement.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Details

Retourne les en-têtes téléchargés à partir de <code>url</code> sous forme d’enregistrement. Un paramètre d’enregistrement facultatif, <code>options</code>, peut être fourni pour spécifier des propriétés supplémentaires. L’enregistrement peut contenir les champs suivants :    <ul><li><code>Query</code> : Ajoutez par programmation des param&#232;tres de requ&#234;te &#224; l’URL sans vous soucier de l’&#233;chappement.</li><li><code>ApiKeyName</code> : Si le site cible a une notion d’une cl&#233; API, ce param&#232;tre peut &#234;tre utilis&#233; pour sp&#233;cifier le nom (et non la valeur) du param&#232;tre de cl&#233; qui doit &#234;tre utilis&#233; dans l’URL. La valeur de cl&#233; r&#233;elle est fournie dans les informations d’identification.</li><li><code>Headers</code> : Si vous sp&#233;cifiez cette valeur en tant qu’enregistrement, des en-t&#234;tes suppl&#233;mentaires sont fournies &#224; une requ&#234;te HTTP.</li><li><code>Timeout</code> : Si vous sp&#233;cifiez cette valeur en tant que dur&#233;e, cela modifie le d&#233;lai d’expiration d’une requ&#234;te HTTP. La valeur par d&#233;faut est 100&#160;secondes.</li><li><code>ExcludedFromCacheKey</code> : Si vous sp&#233;cifiez cette valeur en tant que liste, les cl&#233;s d’en-t&#234;te HTTP sont exclues du calcul de la mise en cache des donn&#233;es.</li><li><code>IsRetry</code> : Si vous sp&#233;cifiez la valeur logique true, toute r&#233;ponse existante est ignor&#233;e dans le cache lors de la r&#233;cup&#233;ration des donn&#233;es.</li><li><code>ManualStatusHandling</code> : Si vous sp&#233;cifiez cette valeur en tant que liste, vous risquez d’emp&#234;cher toute gestion int&#233;gr&#233;e des requ&#234;tes HTTP dont la r&#233;ponse contient l’un de ces codes d’&#233;tat.</li><li><code>RelativePath</code> : Si cette valeur est sp&#233;cifi&#233;e, le texte est ajout&#233; &#224; l’URL de base avant d’effectuer la demande.</li></ul>    La requête HTTP est effectuée avec la méthode HEAD. En dehors d’un contexte de connecteur de données personnalisé, seul un sous-ensemble d’en-têtes de réponse est disponible (pour des raisons de sécurité).    


## Examples

### Example #1 
Récupérez les en-têtes HTTP pour &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; à l’aide des options RelativePath et Query.
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
