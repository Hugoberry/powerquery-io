---
title: Sql.Databases
---

# Sql.Databases


## Description

Retourne une table de bases de données dans un SQL Server.


## Syntax

```powerquery
Sql.Databases(
    server as text,
    optional options as record
) as table
```


## Details

Retourne une table de bases de données dans le serveur SQL spécifié, <code>server</code>. Vous pouvez spécifier un paramètre d'enregistrement optionnel, <code>options</code>, pour contrôler les options suivantes :    <ul><li><code>CreateNavigationProperties</code> : Valeur logique (true/false) qui indique si des propri&#233;t&#233;s de navigation doivent &#234;tre g&#233;n&#233;r&#233;es pour les valeurs retourn&#233;es (valeur par d&#233;faut&#160;: true).</li><li><code>NavigationPropertyNameGenerator</code> : Fonction utilis&#233;e pour la cr&#233;ation des noms de propri&#233;t&#233;s de navigation.</li><li><code>MaxDegreeOfParallelism</code> : Nombre qui d&#233;finit la valeur de la clause de requ&#234;te &quot;maxdop&quot; dans la requ&#234;te SQL g&#233;n&#233;r&#233;e.</li><li><code>CommandTimeout</code> : D&#233;lai qui contr&#244;le le temps d’ex&#233;cution d’une requ&#234;te c&#244;t&#233; serveur avant que celle-ci ne soit annul&#233;e. La valeur par d&#233;faut correspond &#224; dix&#160;minutes.</li><li><code>ConnectionTimeout</code> : D&#233;lai qui contr&#244;le le temps d’attente avant l’abandon d’une tentative pour &#233;tablir une connexion au serveur. La valeur par d&#233;faut d&#233;pend du pilote.</li><li><code>HierarchicalNavigation</code> : Valeur logique (true/false) qui indique si les tables &#224; afficher doivent &#234;tre regroup&#233;es en fonction de leurs noms de sch&#233;mas (valeur par d&#233;faut&#160;: false).</li><li><code>MultiSubnetFailover</code> : Valeur logique (true/false) qui d&#233;finit la valeur de la propri&#233;t&#233; &quot;MultiSubnetFailover&quot; dans la cha&#238;ne de connexion (valeur par d&#233;faut&#160;: false).</li><li><code>UnsafeTypeConversions</code> : Valeur logique (true/false) qui, si elle est d&#233;finie sur true, tente de replier des conversions de type qui peuvent &#233;chouer et provoquer l’&#233;chec de la requ&#234;te enti&#232;re. Ceci n’est pas recommand&#233; pour un usage g&#233;n&#233;ral.</li><li><code>ContextInfo</code> : Valeur binaire utilis&#233;e pour d&#233;finir CONTEXT_INFO avant l&#39;ex&#233;cution de chaque commande.</li><li><code>OmitSRID</code> : Valeur logique (true/false) qui, si elle est d&#233;finie sur true, omet le SRID lors de la production de langage Well-Known Text &#224; partir de types g&#233;om&#233;triques et g&#233;ographiques.</li><li><code>EnableCrossDatabaseFolding</code> : Valeur logique (true/false) qui, si la valeur est true, autorise le pliage des requ&#234;tes entre les bases de donn&#233;es sur le m&#234;me serveur. La valeur par d&#233;faut est false.</li></ul>    Le paramètre d'enregistrement est indiqué sous la forme [option1 = value1, option2 = value2...] par exemple.    <br />    Ne prend pas en charge la définition d'une requête SQL à exécuter sur le serveur. <code>Sql.Database</code> doit être utilisé à la place de l'exécution d'une requête SQL.    



## Category
Accessing data
