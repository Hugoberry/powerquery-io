---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Importer des données d&#39;une base de données BigQuery à l’aide d’Azure AD


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

      Renvoie un tableau répertoriant les projets disponibles dans Google BigQuery à l'aide d'Azure AD pour <code>Billing Project ID</code> . Un paramètre d'enregistrement facultatif, <code>options</code>, peut être spécifié pour contrôler les options suivantes :      <ul>        <li><code>Délai de connexion dépassé</code>: Une durée qui contrôle le temps d'attente avant d'abandonner une tentative de connexion au serveur. La valeur par défaut est la valeur du délai d'expiration de la connexion ODBC.</li>        <li><code>CommandTimeout</code>: Une durée qui contrôle la durée pendant laquelle la requête côté serveur est autorisée à s'exécuter avant d'être annulée.</li>        <li><code>UseStorageApi</code>: Spécifie s'il faut utiliser l'API BigQuery Storage pour les grands ensembles de résultats. La valeur par défaut est true pour utiliser l'API de stockage. Définir sur false pour ne pas utiliser l'API de stockage</li>        <li><code>AudienceUri</code>: Il s'agit de l'URI d'audience que le pilote ODBC peut utiliser pour ses demandes d'échange de jetons. Ce champ doit être un URI complet (i.e. //iam.googleapis.com/locations/global/workforcePools/$\{pool_id}/providers/azuread) où pool_id est un nom unique au monde pour identifier le pool de main-d'œuvre.</li>      </ul>    Le paramètre d'enregistrement est spécifié comme [option1 = value1, option2 = value2...].    


## Examples

### Example #1 
Lister les projets disponibles dans Google BigQuery à l’aide d’Azure AD
```powerquery
GoogleBigQueryAad.Database()
```



