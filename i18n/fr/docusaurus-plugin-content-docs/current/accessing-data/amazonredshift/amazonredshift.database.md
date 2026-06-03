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

Retourne une table répertoriant les tables sur le `serveur` cluster Amazon Redshift dans la `base de données`. Un paramètre d’enregistrement facultatif, `options`, peut être spécifié pour contrôler les options suivantes :

-   `Nom du fournisseur` : Valeur de texte à utiliser comme nom de fournisseur pour la connexion. Il est utilisé lors de l’utilisation de l’authentification Microsoft.
-   `Taille du lot` : nombre de lignes récupérées lors d’un seul appel au serveur.


## Examples

### Example #1

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



