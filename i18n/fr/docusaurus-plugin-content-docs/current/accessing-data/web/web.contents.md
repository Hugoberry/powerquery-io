---
title: Web.Contents
---

# Web.Contents


Retourne le contenu téléchargé à partir de l'URL en tant que valeur binaire.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Retourne le contenu téléchargé à partir de `url` sous forme binaire. Un paramètre d'enregistrement facultatif `options` peut être fourni pour spécifier des propriétés supplémentaires. L'enregistrement peut contenir les champs suivants :

-   `Query` : Ajoutez par programmation des paramètres de requête à l’URL sans vous soucier de l’échappement.
-   `ApiKeyName` : Si le site cible a une notion d’une clé API, ce paramètre peut être utilisé pour spécifier le nom (et non la valeur) du paramètre de clé qui doit être utilisé dans l’URL. La valeur de clé réelle est fournie dans les informations d’identification.
-   `Headers` : Si vous spécifiez cette valeur en tant qu’enregistrement, des en-têtes supplémentaires sont fournies à une requête HTTP.
-   `Timeout` : Si vous spécifiez cette valeur en tant que durée, cela modifie le délai d’expiration d’une requête HTTP. La valeur par défaut est 100 secondes.
-   `ExcludedFromCacheKey` : Si vous spécifiez cette valeur en tant que liste, les clés d’en-tête HTTP sont exclues du calcul de la mise en cache des données.
-   `IsRetry` : Si vous spécifiez la valeur logique true, toute réponse existante est ignorée dans le cache lors de la récupération des données.
-   `ManualStatusHandling` : Si vous spécifiez cette valeur en tant que liste, vous risquez d’empêcher toute gestion intégrée des requêtes HTTP dont la réponse contient l’un de ces codes d’état.
-   `RelativePath` : Si cette valeur est spécifiée, le texte est ajouté à l’URL de base avant d’effectuer la demande.
-   `Content` : Si vous spécifiez cette valeur, la requête web devient POST au lieu de GET, en utilisant la valeur de l’option en tant que contenu de la requête POST.

La requête HTTP est effectuée sous la forme d’une requête GET (quand aucun contenu n’est spécifié) ou d’une requête POST (lorsqu’il existe un contenu). Les requêtes POST ne peuvent être effectuées que de manière anonyme.  
  
Les en-têtes de la réponse HTTP sont disponibles sous forme de métadonnées sur le résultat binaire. En dehors d’un contexte de connecteur de données personnalisé, seul un sous-ensemble d’en-têtes de réponse est disponible (pour des raisons de sécurité).


## Examples

### Example #1
Récupérez le contenu de `"https://bing.com/search?q=Power+Query"` en utilisant les options RelativePath et Query. Ces options peuvent être utilisées pour interroger dynamiquement une URL de base statique.
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
Connectez-vous à une URL sécurisée qui accepte une clé d’authentification dans le cadre de sa chaîne de requête. Au lieu de coder en dur la clé secrète dans M (ce qui risque de compromettre la sécurité), la clé peut être fournie de manière sécurisée en spécifiant son nom (et non sa valeur) dans M, en choisissant l’authentification d’API web et en entrant la valeur de clé dans le cadre des informations d’identification de l’API web. Lorsqu’il est utilisé de cette façon, l’exemple suivant génère une requête à `"https://contoso.com/api/customers/get?api_key=******"`.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
