---
title: DB2.Database
---

# DB2.Database


Retourne une table de tables SQL et de vues disponibles dans une base de données Db2.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Retourne une table de tables SQL et de vues disponibles dans une base de données Db2 sur le serveur <code>server</code> dans l'instance de base de données nommée <code>database</code>. Vous pouvez éventuellement spécifier le port avec le serveur, en les séparant par le signe deux-points. Vous pouvez spécifier un paramètre d'enregistrement facultatif, <code>options</code>, pour contrôler les options suivantes :    <ul><li><code>CreateNavigationProperties</code> : Valeur logique (true/false) qui indique si des propri&#233;t&#233;s de navigation doivent &#234;tre g&#233;n&#233;r&#233;es pour les valeurs retourn&#233;es (valeur par d&#233;faut&#160;: true).</li><li><code>NavigationPropertyNameGenerator</code> : Fonction utilis&#233;e pour la cr&#233;ation des noms de propri&#233;t&#233;s de navigation.</li><li><code>Query</code> : Requ&#234;te SQL native utilis&#233;e pour r&#233;cup&#233;rer des donn&#233;es. Si la requ&#234;te produit plusieurs jeux de r&#233;sultats, seul le premier est retourn&#233;.</li><li><code>CommandTimeout</code> : D&#233;lai qui contr&#244;le le temps d’ex&#233;cution d’une requ&#234;te c&#244;t&#233; serveur avant que celle-ci ne soit annul&#233;e. La valeur par d&#233;faut correspond &#224; dix&#160;minutes.</li><li><code>ConnectionTimeout</code> : D&#233;lai qui contr&#244;le le temps d’attente avant l’abandon d’une tentative pour &#233;tablir une connexion au serveur. La valeur par d&#233;faut d&#233;pend du pilote.</li><li><code>HierarchicalNavigation</code> : Valeur logique (true/false) qui indique si les tables &#224; afficher doivent &#234;tre regroup&#233;es en fonction de leurs noms de sch&#233;mas (valeur par d&#233;faut&#160;: false).</li><li><code>Implementation</code> : Sp&#233;cifie l&#39;impl&#233;mentation du fournisseur de base de donn&#233;es interne &#224; utiliser. Valeurs valides&#160;: &quot;IBM&quot; et &quot;Microsoft&quot;.</li><li><code>BinaryCodePage</code> : Nombre permettant au CCSID (Coded Character Set Identifier) de d&#233;coder les donn&#233;es binaires Db2 FOR BIT en cha&#238;nes de caract&#232;res. S&#39;applique &#224; Implementation = &quot;Microsoft&quot;. D&#233;finissez la valeur sur&#160;0 pour d&#233;sactiver la conversion (par d&#233;faut). D&#233;finissez la valeur sur&#160;1 pour effectuer la conversion en fonction de l&#39;encodage de la base de donn&#233;es. D&#233;finissez d&#39;autres nombres CCSID pour effectuer la conversion en fonction de l&#39;encodage de l&#39;application.</li><li><code>PackageCollection</code> : Sp&#233;cifie une valeur de cha&#238;ne pour la collection de paquets (valeur par d&#233;faut&#160;: &quot;NULLID&quot;) afin de permettre l&#39;utilisation des paquets partag&#233;s n&#233;cessaires au traitement des instructions SQL. S&#39;applique &#224; Implementation = &quot;Microsoft&quot;.</li><li><code>UseDb2ConnectGateway</code> : Sp&#233;cifie si la connexion est effectu&#233;e par le biais d&#39;une passerelle DB2 Connect. S&#39;applique &#224; Implementation = &quot;Microsoft&quot;.</li></ul>    Le paramètre d'enregistrement est indiqué sous la forme [option1 = value1, option2 = value2...] ou [Query = "select ..."] par exemple.    



## Category
Accessing data
