---
title: OleDb.DataSource
---

# OleDb.DataSource


## Description

Retourne une table des tables et vues SQL de la source de données OLE DB.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Details

Retourne une table des tables et vues SQL de la source de données OLE DB spécifiée par la chaîne de connexion <code>connectionString</code>. <code>connectionString</code> peut être du texte ou un enregistrement de paires propriété/valeur. Les valeurs de propriété peuvent être du texte ou un nombre. Vous pouvez indiquer un paramètre d'enregistrement facultatif, <code>options</code>, pour spécifier des propriétés supplémentaires. L'enregistrement peut contenir les champs suivants :    <ul><li><code>CreateNavigationProperties</code> : Valeur logique (true/false) qui indique si des propri&#233;t&#233;s de navigation doivent &#234;tre g&#233;n&#233;r&#233;es pour les valeurs retourn&#233;es (valeur par d&#233;faut&#160;: true).</li><li><code>NavigationPropertyNameGenerator</code> : Fonction utilis&#233;e pour la cr&#233;ation des noms de propri&#233;t&#233;s de navigation.</li><li><code>Query</code> : Requ&#234;te SQL native utilis&#233;e pour r&#233;cup&#233;rer des donn&#233;es. Si la requ&#234;te produit plusieurs jeux de r&#233;sultats, seul le premier est retourn&#233;.</li><li><code>HierarchicalNavigation</code> : Valeur logique (true/false) qui indique si les tables &#224; afficher doivent &#234;tre regroup&#233;es en fonction de leurs noms de sch&#233;mas (valeur par d&#233;faut&#160;: true).</li><li><code>ConnectionTimeout</code> : D&#233;lai qui contr&#244;le le temps d’attente avant l’abandon d’une tentative pour &#233;tablir une connexion au serveur. La valeur par d&#233;faut d&#233;pend du pilote.</li><li><code>CommandTimeout</code> : D&#233;lai qui contr&#244;le le temps d’ex&#233;cution d’une requ&#234;te c&#244;t&#233; serveur avant que celle-ci ne soit annul&#233;e. La valeur par d&#233;faut correspond &#224; dix&#160;minutes.</li><li><code>SqlCompatibleWindowsAuth</code> : Logique (true/false) qui d&#233;termine la cr&#233;ation d&#39;options de cha&#238;ne de connexion compatible avec SQL Server pour l&#39;authentification Windows. La valeur par d&#233;faut est true.</li></ul>    Le paramètre d'enregistrement est indiqué sous la forme [option1 = value1, option2 = value2...] ou [Query = "select ..."], par exemple.



## Category
Accessing data
