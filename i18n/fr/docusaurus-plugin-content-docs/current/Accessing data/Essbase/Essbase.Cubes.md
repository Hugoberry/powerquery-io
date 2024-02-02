---
title: Essbase.Cubes
---

# Essbase.Cubes


## Description

Retourne les cubes d&#39;une instance Essbase regroupés par serveur Essbase.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Details

Retourne une table de cubes regroupés par serveur Essbase d'une instance Essbase sur le serveur APS <code>url</code>. Un paramètre d'enregistrement facultatif, <code>options</code>, peut être spécifié pour contrôler les options suivantes :   <ul><li><code>CommandTimeout</code> : D&#233;lai qui contr&#244;le le temps d’ex&#233;cution d’une requ&#234;te c&#244;t&#233; serveur avant que celle-ci ne soit annul&#233;e. La valeur par d&#233;faut correspond &#224; dix&#160;minutes.</li></ul>



## Category
Accessing data
