---
title: MySQL.Database
---

# MySQL.Database


## Description

Retourne une table des tables SQL, des onglets et des fonctions scalaires stockés disponibles dans une base de données MySQL.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Retourne une table de tables SQL, vues et fonctions scalaires stockées disponibles dans une base de données MySQL sur le serveur <code>server</code> dans l'instance de base de données nommée <code>database</code>. Vous pouvez éventuellement spécifier le port avec le serveur, en les séparant par le signe deux-points. Vous pouvez spécifier un paramètre d'enregistrement optionnel, <code>options</code>, pour contrôler les options suivantes :    <ul><li><code>Encoding</code> : Valeur TextEncoding qui sp&#233;cifie le jeu de caract&#232;res utilis&#233; pour encoder toutes les requ&#234;tes envoy&#233;es au serveur (la valeur par d&#233;faut est null).</li><li><code>CreateNavigationProperties</code> : Valeur logique (true/false) qui indique si des propri&#233;t&#233;s de navigation doivent &#234;tre g&#233;n&#233;r&#233;es pour les valeurs retourn&#233;es (valeur par d&#233;faut&#160;: true).</li><li><code>NavigationPropertyNameGenerator</code> : Fonction utilis&#233;e pour la cr&#233;ation des noms de propri&#233;t&#233;s de navigation.</li><li><code>Query</code> : Requ&#234;te SQL native utilis&#233;e pour r&#233;cup&#233;rer des donn&#233;es. Si la requ&#234;te produit plusieurs jeux de r&#233;sultats, seul le premier est retourn&#233;.</li><li><code>CommandTimeout</code> : D&#233;lai qui contr&#244;le le temps d’ex&#233;cution d’une requ&#234;te c&#244;t&#233; serveur avant que celle-ci ne soit annul&#233;e. La valeur par d&#233;faut correspond &#224; dix&#160;minutes.</li><li><code>ConnectionTimeout</code> : D&#233;lai qui contr&#244;le le temps d’attente avant l’abandon d’une tentative pour &#233;tablir une connexion au serveur. La valeur par d&#233;faut d&#233;pend du pilote.</li><li><code>TreatTinyAsBoolean</code> : Valeur logique (true/false) qui d&#233;termine si les colonnes tinyint doivent &#234;tre forc&#233;es sur le serveur en tant que valeurs logiques. La valeur par d&#233;faut est true.</li><li><code>OldGuids</code> : Valeur logique (true/false) qui indique si les colonnes char(36) (si la valeur est false) ou les colonnes binary(16) (si la valeur est true) doivent &#234;tre trait&#233;es en tant que GUID. La valeur par d&#233;faut est false.</li><li><code>ReturnSingleDatabase</code> : Valeur logique (true/false) qui indique si toutes les tables de toutes les bases de donn&#233;es doivent &#234;tre retourn&#233;es (si la valeur est false), ou si les tables et les vues de la base de donn&#233;es sp&#233;cifi&#233;e doivent &#234;tre retourn&#233;es (si la valeur est true). La valeur par d&#233;faut est false.</li><li><code>HierarchicalNavigation</code> : Valeur logique (true/false) qui indique si les tables &#224; afficher doivent &#234;tre regroup&#233;es en fonction de leurs noms de sch&#233;mas (valeur par d&#233;faut&#160;: false).</li></ul>    Le paramètre d'enregistrement est indiqué sous la forme [option1 = value1, option2 = value2...] ou [Query = "select ..."] par exemple.    



## Category
Accessing data
