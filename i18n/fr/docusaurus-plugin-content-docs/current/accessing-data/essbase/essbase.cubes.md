---
title: Essbase.Cubes
---

# Essbase.Cubes


Retourne les cubes d'une instance Essbase regroupés par serveur Essbase.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Remarks

Retourne une table de cubes regroupés par serveur Essbase d'une instance Essbase sur le serveur APS `url`. Un paramètre d'enregistrement facultatif, `options`, peut être spécifié pour contrôler les options suivantes :

-   `CommandTimeout` : Délai qui contrôle le temps d’exécution d’une requête côté serveur avant que celle-ci ne soit annulée. La valeur par défaut correspond à dix minutes.



## Category
Accessing data
