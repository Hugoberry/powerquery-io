---
title: SapHana.Database
---

# SapHana.Database


## Description

Retourne les packages d&#39;une base de données SAP HANA.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Details

Retourne une table de paquets multidimensionnels de la base de données SAP HANA <code>server</code>. Vous pouvez spécifier un paramètre d'enregistrement facultatif, <code>options</code>, pour contrôler les options suivantes :    <ul><li><code>Query</code> : Requ&#234;te SQL native utilis&#233;e pour r&#233;cup&#233;rer des donn&#233;es. Si la requ&#234;te produit plusieurs jeux de r&#233;sultats, seul le premier est retourn&#233;.</li><li><code>Distribution</code> : Param&#232;tre SapHanaDistribution qui d&#233;finit la valeur de la propri&#233;t&#233; &#171;&#160;Distribution&#160;&#187; dans la cha&#238;ne de connexion. Le routage d&#39;instruction est la m&#233;thode qui permet d&#39;&#233;valuer si le noeud serveur d&#39;un syst&#232;me distribu&#233; est correct avant l&#39;ex&#233;cution de l&#39;instruction. La valeur par d&#233;faut est SapHanaDistribution.All.</li><li><code>Implementation</code> : Sp&#233;cifie l&#39;impl&#233;mentation du connecteur SAP HANA &#224; utiliser.</li><li><code>EnableColumnBinding</code> : Lie des variables aux colonnes d’un jeu de r&#233;sultats SAP HANA lors de l’extraction de donn&#233;es. Peut potentiellement am&#233;liorer les performances au prix d’une utilisation l&#233;g&#232;rement plus &#233;lev&#233;e de la m&#233;moire. La valeur par d&#233;faut est false.</li><li><code>ConnectionTimeout</code> : D&#233;lai qui contr&#244;le le temps d’attente avant l’abandon d’une tentative pour &#233;tablir une connexion au serveur. La valeur par d&#233;faut est 15&#160;secondes.</li><li><code>CommandTimeout</code> : D&#233;lai qui contr&#244;le le temps d’ex&#233;cution d’une requ&#234;te c&#244;t&#233; serveur avant que celle-ci ne soit annul&#233;e. La valeur par d&#233;faut correspond &#224; dix&#160;minutes.</li></ul>    



## Category
Accessing data
