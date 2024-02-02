---
title: Web.Contents
---

# Web.Contents


## Description

Retourne le contenu téléchargé à partir de l&#39;URL en tant que valeur binaire.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Details

Retourne le contenu téléchargé à partir de <code>url</code> sous forme binaire. Un paramètre d’enregistrement facultatif, <code>options</code>, peut être fourni pour spécifier des propriétés supplémentaires. L’enregistrement peut contenir les champs suivants :    <ul><li><code>Query</code> : Ajoutez par programmation des param&#232;tres de requ&#234;te &#224; l’URL sans vous soucier de l’&#233;chappement.</li><li><code>ApiKeyName</code> : Si le site cible a une notion d’une cl&#233; API, ce param&#232;tre peut &#234;tre utilis&#233; pour sp&#233;cifier le nom (et non la valeur) du param&#232;tre de cl&#233; qui doit &#234;tre utilis&#233; dans l’URL. La valeur de cl&#233; r&#233;elle est fournie dans les informations d’identification.</li><li><code>Headers</code> : Si vous sp&#233;cifiez cette valeur en tant qu’enregistrement, des en-t&#234;tes suppl&#233;mentaires sont fournies &#224; une requ&#234;te HTTP.</li><li><code>Timeout</code> : Si vous sp&#233;cifiez cette valeur en tant que dur&#233;e, cela modifie le d&#233;lai d’expiration d’une requ&#234;te HTTP. La valeur par d&#233;faut est 100&#160;secondes.</li><li><code>ExcludedFromCacheKey</code> : Si vous sp&#233;cifiez cette valeur en tant que liste, les cl&#233;s d’en-t&#234;te HTTP sont exclues du calcul de la mise en cache des donn&#233;es.</li><li><code>IsRetry</code> : Si vous sp&#233;cifiez la valeur logique true, toute r&#233;ponse existante est ignor&#233;e dans le cache lors de la r&#233;cup&#233;ration des donn&#233;es.</li><li><code>ManualStatusHandling</code> : Si vous sp&#233;cifiez cette valeur en tant que liste, vous risquez d’emp&#234;cher toute gestion int&#233;gr&#233;e des requ&#234;tes HTTP dont la r&#233;ponse contient l’un de ces codes d’&#233;tat.</li><li><code>RelativePath</code> : Si cette valeur est sp&#233;cifi&#233;e, le texte est ajout&#233; &#224; l’URL de base avant d’effectuer la demande.</li><li><code>Content</code> : Si vous sp&#233;cifiez cette valeur, la requ&#234;te web devient POST au lieu de GET, en utilisant la valeur de l’option en tant que contenu de la requ&#234;te POST.</li></ul>    La requête HTTP est effectuée sous la forme d’une requête GET (quand aucun contenu n’est spécifié) ou d’une requête POST (lorsqu’il existe un contenu). Les demandes POST ne peuvent être effectuées que de manière anonyme.    <br />    Les en-têtes de la réponse HTTP sont disponibles sous forme de métadonnées sur le résultat binaire. En dehors d’un contexte de connecteur de données personnalisé, seul un sous-ensemble d’en-têtes de réponse est disponible (pour des raisons de sécurité).    


## Examples

### Example #1 
Récupérez le contenu de &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; en utilisant les options RelativePath et Query. Ces options peuvent être utilisées pour interroger dynamiquement une URL de base statique.
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
Effectuez une publication par rapport à une URL, en passant une charge utile JSON binaire et en analysant la réponse en tant que JSON.
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
Connectez-vous à une URL sécurisée qui accepte une clé d’authentification dans le cadre de sa chaîne de requête. Au lieu de coder en dur la clé secrète dans M (ce qui risque de compromettre la sécurité),     la clé peut être fournie de manière sécurisée en spécifiant son nom (et non sa valeur) dans M, en choisissant l’authentification d’API web et en entrant la valeur de clé dans le cadre des informations d’identification de l’API web.    Lorsqu’il est utilisé de cette façon, l’exemple suivant génère une demande à &lt;code&gt;&#34;https://contoso.com/api/customers/get?api_key=\*\*\*\*\*\*&#34;&lt;/code&gt;.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
