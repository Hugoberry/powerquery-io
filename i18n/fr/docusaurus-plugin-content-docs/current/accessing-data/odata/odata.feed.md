---
title: OData.Feed
---

# OData.Feed


Retourne une table des flux OData offerts par un service OData.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Remarks

Renvoie une table de flux OData proposés par un service OData, à partir d'une URI `serviceUri`, d'en-têtes `headers`. Une valeur booléenne indiquant s'il convient d'utiliser des connexions concurrentes — ou un paramètre d'enregistrement facultatif, `options`, peut être spécifiée pour contrôler les options suivantes :

-   `Query` : Ajoutez programmatiquement des paramètres de requête à l'URL, sans avoir à vous soucier de l'échappement.
-   `Headers` : Spécifier cette valeur sous forme d'enregistrement permet d'ajouter des en-têtes supplémentaires à une requête HTTP.
-   `ExcludedFromCacheKey` : Spécifier cette valeur sous forme de liste exclura ces clés d'en-tête HTTP du calcul de la clé de cache.
-   `ApiKeyName` : Si le site cible intègre la notion de clé API, ce paramètre permet de spécifier le nom (et non la valeur) du paramètre de clé à utiliser dans l'URL. La valeur réelle de la clé est fournie dans le justificatif d'identité.
-   `Timeout` : Spécifier cette valeur sous forme de durée modifiera le délai d'attente d'une requête HTTP. La valeur par défaut est de 600 secondes.
-   `EnableBatch` : Une valeur logique (vrai/faux) qui détermine si la génération d'une requête OData $batch est autorisée lorsque la valeur de MaxUriLength est dépassée (la valeur par défaut est faux).
-   `MaxUriLength` : Un nombre indiquant la longueur maximale d'un URI autorisé envoyé à un service OData. Si cette limite est dépassée et que la valeur de EnableBatch est true, la requête sera envoyée vers un point de terminaison OData $batch ; dans le cas contraire, elle échouera (la valeur par défaut est 2048).
-   `Concurrent` : Une valeur logique (vrai/faux) ; lorsqu'elle est définie sur vrai, les requêtes adressées au service seront effectuées de manière concurrente. Lorsqu'il est défini sur false, les requêtes seront effectuées séquentiellement. Lorsqu'elle n'est pas spécifiée, la valeur est déterminée par l'annotation AsynchronousRequestsSupported du service. Si le service ne précise pas si AsynchronousRequestsSupported est pris en charge, les requêtes seront effectuées séquentiellement.
-   `ODataVersion` : Un nombre (3 ou 4) spécifiant la version du protocole OData à utiliser pour ce service OData. Lorsqu'aucune version n'est spécifiée, toutes les versions prises en charge seront demandées. La version du service sera déterminée par l'en-tête OData-Version renvoyé par le service.
-   `FunctionOverloads` : Une valeur logique (vrai/faux). Lorsqu'elle est définie sur vrai, les surcharges d'importation de fonctions sont listées dans le navigateur en tant qu'entrées distinctes ; lorsqu'elle est définie sur faux, elles sont listées comme une fonction unifiée dans le navigateur. Valeur par défaut pour V3 : false. Valeur par défaut pour V4 : true.
-   `MoreColumns` : Une valeur logique (vrai/faux) qui, lorsqu'elle est définie sur vrai, ajoute une colonne « More Columns » à chaque flux d'entités contenant des types ouverts et des types polymorphes. Ceci contiendra les champs non déclarés dans le type de base. Lorsque ce champ est faux, il n'est pas présent. Par défaut : false.
-   `IncludeAnnotations` : Une liste, séparée par des virgules, de noms de termes qualifiés par un espace de noms ou de motifs à inclure, utilisant « \* » comme caractère générique. Par défaut, aucune des annotations n'est incluse.
-   `IncludeMetadataAnnotations` : Une liste, séparée par des virgules, de noms de termes qualifiés par leur espace de noms ou de motifs à inclure dans les requêtes de documents de métadonnées, avec « \* » comme caractère générique. Par défaut, inclut les mêmes annotations que IncludeAnnotations.
-   `OmitValues` : Permet au service OData d'éviter d'inclure certaines valeurs dans les réponses. Si le service les reconnaît, nous déduirons ces valeurs des champs omis. Les options incluent :
    -   `ODataOmitValues.Nulls` : Permet au service OData d'omettre les valeurs nulles.
-   `Implémentation` : Spécifie l'implémentation du connecteur OData à utiliser. Les valeurs valides sont « 2.0 » ou null.


## Examples

### Example #1
Connectez-vous au service OData TripPin.
```powerquery
OData.Feed("https://services.odata.org/V4/TripPinService")
```

Result: 
```powerquery
table
```




## Category
Accessing data
