---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


Importer des données depuis une base de données Amazon Redshift.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Retourne une table répertoriant les tables sur le <code>serveur</code> cluster Amazon Redshift dans la base de données <code></code>. Un paramètre d’enregistrement facultatif, <code>options</code>, peut être spécifié pour contrôler les options suivantes :<ul><li><code>nom du fournisseur</code> : valeur de texte à utiliser comme nom de fournisseur pour la connexion. Ceci est utilisé lors de l’utilisation de Microsoft Authentication.</li><li><code>Batch Size</code> : nombre de lignes récupérées lors d’un seul appel au serveur.</li></ul>  


## Examples

### Example #1 

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



