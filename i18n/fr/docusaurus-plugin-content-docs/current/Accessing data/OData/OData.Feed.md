---
title: OData.Feed
---

# OData.Feed


## Description

Retourne une table des flux OData offerts par un service OData.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Details

Renvoie un tableau des flux OData offerts par un service OData à partir d'un uri <code>serviceUri</code>, des en-têtes<code>headers</code>. Une valeur booléenne spécifiant s'il faut utiliser des connexions simultanées ou un paramètre d'enregistrement facultatif, <code>options</code>peut être spécifié pour contrôler les options suivantes :    <ul>    <li><code>Requête </code>: Ajout programmé de paramètres de requête à l'URL sans avoir à se soucier de l'échappement. </li>    <li> <code>En-têtes</code> : La spécification de cette valeur en tant qu'enregistrement fournira des en-têtes supplémentaires à une requête HTTP.</li>    <li> <code>ExcludedFromCacheKey</code>: En spécifiant cette valeur sous la forme d'une liste, les clés d'en-tête HTTP suivantes seront exclues du calcul de la mise en cache des données.</li>    <li> <code>ApiKeyName</code> : Si le site cible a la notion de clé API, ce paramètre peut être utilisé pour spécifier le nom (et non la valeur) du paramètre clé qui doit être utilisé dans l'URL. La valeur réelle de la clé est fournie dans l'identifiant.</li>    <li> <code>Délai d'attente</code> : La spécification de cette valeur en tant que durée modifiera le délai d'attente pour une requête HTTP. La valeur par défaut est de 600 secondes.</li>    <li> <code>EnableBatch</code> : Une logique (true/false) qui détermine s'il faut autoriser la génération d'une demande OData $batch si la MaxUriLength est dépassée (par défaut, false).</li>    <li> <code>MaxUriLength</code> : Un nombre qui indique la longueur maximale d'une uri autorisée envoyée à un service OData. Si elle est dépassée et que EnableBatch est vrai, la demande sera faite à un point de terminaison OData $batch, sinon elle échouera (par défaut 2048).</li>    <li> <code>Concurrent</code> : Logique (vrai/faux) : si la valeur est vraie, les demandes au service seront faites simultanément. S'il a la valeur false, les demandes seront faites séquentiellement. Si elle n'est pas spécifiée, la valeur sera déterminée par l'annotation AsynchronousRequestsSupported du service. Si le service ne spécifie pas si AsynchronousRequestsSupported est supporté, les demandes seront faites séquentiellement.</li>    <li> <code>ODataVersion</code> : Un nombre (3 ou 4) qui spécifie la version du protocole OData à utiliser pour ce service OData. S'il n'est pas spécifié, toutes les versions supportées seront demandées. La version du service sera déterminée par l'en-tête OData-Version renvoyé par le service.</li>    <li> <code>FunctionOverloads</code> : Une logique (true/false) : si la valeur est true, les surcharges d'importation de fonctions seront listées dans le navigateur comme des entrées séparées, si la valeur est false, les surcharges d'importation de fonctions seront listées comme une seule fonction d'union dans le navigateur. Valeur par défaut pour V3 : false. Valeur par défaut pour V4 : true.</li>    <li> <code>MoreColumns</code> : Une logique (true/false), lorsqu'elle est définie sur true, ajoute une colonne " More Columns " à chaque flux d'entités contenant des types ouverts et des types polymorphes. Elle contiendra les champs non déclarés dans le type de base. Lorsqu'elle vaut false, ce champ n'est pas présent. Valeur par défaut : false.</li>    <li> <code>IncludeAnnotations</code> : Une liste, séparée par des virgules, de noms de termes ou de modèles qualifiés d'espace de noms à inclure avec "\*" comme caractère générique. Par défaut, aucune des annotations n'est incluse.</li>    <li> <code>IncludeMetadataAnnotations</code> : Une liste, séparée par des virgules, de noms de termes ou de modèles qualifiés d'espace de noms à inclure dans les demandes de documents de métadonnées, avec "\*" comme caractère générique. Par défaut, inclut les mêmes annotations que IncludeAnnotations.</li>    <li> <code>OmitValues</code> : Permet au service OData d'éviter d'écrire certaines valeurs dans les réponses. Si le service le reconnaît, nous déduirons ces valeurs à partir des champs omis. Les options comprennent :      <ul>        <li><code>ODataOmitValues.Nulls</code> : Permet au service OData d'omettre les valeurs nulles.</li>      </ul>    </li>    <li> <code>Mise en œuvre</code> : Spécifie l'implémentation du connecteur OData à utiliser. Les valeurs valides sont " 2.0 " ou null.</li>    </ul>


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
