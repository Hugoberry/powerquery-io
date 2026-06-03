---
title: Web.Headers
---

# Web.Headers


Retourne les en-têtes HTTP téléchargés à partir de l’URL sous forme de valeur d’enregistrement.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Remarks

Retourne les en-têtes téléchargés à partir de `url` sous forme d’enregistrement. Un paramètre d’enregistrement facultatif, `options`, peut être fourni pour spécifier des propriétés supplémentaires. L’enregistrement peut contenir les champs suivants :

-   `Query` : Ajoutez par programmation des paramètres de requête à l’URL sans vous soucier de l’échappement.
-   `ApiKeyName` : Si le site cible a une notion d’une clé API, ce paramètre peut être utilisé pour spécifier le nom (et non la valeur) du paramètre de clé qui doit être utilisé dans l’URL. La valeur de clé réelle est fournie dans les informations d’identification.
-   `Headers` : Si vous spécifiez cette valeur en tant qu’enregistrement, des en-têtes supplémentaires sont fournies à une requête HTTP.
-   `Timeout` : Si vous spécifiez cette valeur en tant que durée, cela modifie le délai d’expiration d’une requête HTTP. La valeur par défaut est 100 secondes.
-   `ExcludedFromCacheKey` : Si vous spécifiez cette valeur en tant que liste, les clés d’en-tête HTTP sont exclues du calcul de la mise en cache des données.
-   `IsRetry` : Si vous spécifiez la valeur logique true, toute réponse existante est ignorée dans le cache lors de la récupération des données.
-   `ManualStatusHandling` : Si vous spécifiez cette valeur en tant que liste, vous risquez d’empêcher toute gestion intégrée des requêtes HTTP dont la réponse contient l’un de ces codes d’état.
-   `RelativePath` : Si cette valeur est spécifiée, le texte est ajouté à l’URL de base avant d’effectuer la demande.

La requête HTTP est effectuée avec la méthode HEAD. En dehors d’un contexte de connecteur de données personnalisé, seul un sous-ensemble d’en-têtes de réponse est disponible (pour des raisons de sécurité).


## Examples

### Example #1
Récupérez les en-têtes HTTP pour `"https://bing.com/search?q=Power+Query"` à l’aide des options RelativePath et Query.
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
