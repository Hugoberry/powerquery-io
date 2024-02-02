---
title: WebAction.Request
---

# WebAction.Request


## Description

Crée une action qui, une fois exécutée, retourne les résultats d&#39;une requête HTTP sous forme de valeur binaire.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Details

Crée une action qui, lorsqu'elle est exécutée, renvoie les résultats de l'exécution d'une <code>method</code>requête contre <code>url</code>l'utilisation de HTTP sous forme de valeur binaire.    Un paramètre d'enregistrement facultatif, <code>options</code>, peut être fourni pour spécifier des propriétés supplémentaires. L'enregistrement peut contenir les champs suivants :     <ul><li><code>Query</code> : Ajoutez par programmation des param&#232;tres de requ&#234;te &#224; l’URL sans vous soucier de l’&#233;chappement.</li><li><code>ApiKeyName</code> : Si le site cible a une notion d’une cl&#233; API, ce param&#232;tre peut &#234;tre utilis&#233; pour sp&#233;cifier le nom (et non la valeur) du param&#232;tre de cl&#233; qui doit &#234;tre utilis&#233; dans l’URL. La valeur de cl&#233; r&#233;elle est fournie dans les informations d’identification.</li><li><code>Headers</code> : Si vous sp&#233;cifiez cette valeur en tant qu’enregistrement, des en-t&#234;tes suppl&#233;mentaires sont fournies &#224; une requ&#234;te HTTP.</li><li><code>Timeout</code> : Si vous sp&#233;cifiez cette valeur en tant que dur&#233;e, cela modifie le d&#233;lai d’expiration d’une requ&#234;te HTTP. La valeur par d&#233;faut est 100&#160;secondes.</li><li><code>ExcludedFromCacheKey</code> : Si vous sp&#233;cifiez cette valeur en tant que liste, les cl&#233;s d’en-t&#234;te HTTP sont exclues du calcul de la mise en cache des donn&#233;es.</li><li><code>IsRetry</code> : Si vous sp&#233;cifiez la valeur logique true, toute r&#233;ponse existante est ignor&#233;e dans le cache lors de la r&#233;cup&#233;ration des donn&#233;es.</li><li><code>ManualStatusHandling</code> : Si vous sp&#233;cifiez cette valeur en tant que liste, vous risquez d’emp&#234;cher toute gestion int&#233;gr&#233;e des requ&#234;tes HTTP dont la r&#233;ponse contient l’un de ces codes d’&#233;tat.</li><li><code>RelativePath</code> : Si cette valeur est sp&#233;cifi&#233;e, le texte est ajout&#233; &#224; l’URL de base avant d’effectuer la demande.</li><li><code>Content</code> : Si vous sp&#233;cifiez cette valeur, son contenu devient le corps de la requ&#234;te HTTP.</li></ul>    <br />    Notez que cette fonction est désactivée dans la plupart des contextes. Envisagez d'utiliser Web.Contents à la place.    


## Examples

### Example #1 
Effectuez une demande GET sur Bing.
```powerquery
WebAction.Request(WebMethod.Get, "https://bing.com")
```

Result: 
```powerquery
Action
```




## Category
Action
