---
title: WebAction.Request
---

# WebAction.Request


Crée une action qui, une fois exécutée, retourne les résultats d'une requête HTTP sous forme de valeur binaire.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Remarks

Crée une action qui, lorsqu'elle est exécutée, renvoie les résultats de l'exécution d'une `method`requête contre `url`l'utilisation de HTTP sous forme de valeur binaire. Un paramètre d’enregistrement facultatif, `options`, peut être fourni pour spécifier des propriétés supplémentaires. L'enregistrement peut contenir les champs suivants :

-   `Query` : Ajoutez par programmation des paramètres de requête à l’URL sans vous soucier de l’échappement.
-   `ApiKeyName` : Si le site cible a une notion d’une clé API, ce paramètre peut être utilisé pour spécifier le nom (et non la valeur) du paramètre de clé qui doit être utilisé dans l’URL. La valeur de clé réelle est fournie dans les informations d’identification.
-   `Headers` : Si vous spécifiez cette valeur en tant qu’enregistrement, des en-têtes supplémentaires sont fournies à une requête HTTP.
-   `Timeout` : Si vous spécifiez cette valeur en tant que durée, cela modifie le délai d’expiration d’une requête HTTP. La valeur par défaut est 100 secondes.
-   `ExcludedFromCacheKey` : Si vous spécifiez cette valeur en tant que liste, les clés d’en-tête HTTP sont exclues du calcul de la mise en cache des données.
-   `IsRetry` : Si vous spécifiez la valeur logique true, toute réponse existante est ignorée dans le cache lors de la récupération des données.
-   `ManualStatusHandling` : Si vous spécifiez cette valeur en tant que liste, vous risquez d’empêcher toute gestion intégrée des requêtes HTTP dont la réponse contient l’un de ces codes d’état.
-   `RelativePath` : Si cette valeur est spécifiée, le texte est ajouté à l’URL de base avant d’effectuer la demande.
-   `Content` : Si vous spécifiez cette valeur, son contenu devient le corps de la requête HTTP.

Notez que cette fonction est désactivée dans la plupart des contextes. Envisagez d’utiliser Web.Contents à la place.


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
