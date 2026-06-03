---
title: SapHana.Database
---

# SapHana.Database


Retourne les packages d'une base de données SAP HANA.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Retourne une table de paquets multidimensionnels de la base de données SAP HANA `server`. Vous pouvez spécifier un paramètre d'enregistrement facultatif, `options`, pour contrôler les options suivantes :

-   `Query` : Requête SQL native utilisée pour récupérer des données. Si la requête produit plusieurs jeux de résultats, seul le premier est retourné.
-   `Distribution` : Paramètre SapHanaDistribution qui définit la valeur de la propriété « Distribution » dans la chaîne de connexion. Le routage d'instruction est la méthode qui permet d'évaluer si le noeud serveur d'un système distribué est correct avant l'exécution de l'instruction. La valeur par défaut est SapHanaDistribution.All.
-   `Implementation` : Spécifie l'implémentation du connecteur SAP HANA à utiliser.
-   `EnableColumnBinding` : Lie des variables aux colonnes d’un jeu de résultats SAP HANA lors de l’extraction de données. Peut potentiellement améliorer les performances au prix d’une utilisation légèrement plus élevée de la mémoire. La valeur par défaut est false.
-   `ConnectionTimeout` : Délai qui contrôle le temps d’attente avant l’abandon d’une tentative pour établir une connexion au serveur. La valeur par défaut est 15 secondes.
-   `CommandTimeout` : Délai qui contrôle le temps d’exécution d’une requête côté serveur avant que celle-ci ne soit annulée. La valeur par défaut correspond à dix minutes.



## Category
Accessing data
