---
title: AnalysisServices.Database
---

# AnalysisServices.Database


Retourne une table de cubes multidimensionnels ou de modèles tabulaires de la base de données Analysis Services.


## Syntax

```powerquery
AnalysisServices.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Retourne une table de cubes multidimensionnels ou de modèles tabulaires de la base de données Analysis Services <code>database</code> sur le serveur <code>server</code>. Vous pouvez spécifier un paramètre d'enregistrement facultatif, <code>options</code>, pour contrôler les options suivantes :    <ul><li><code>Query</code> : Requ&#234;te MDX native utilis&#233;e pour r&#233;cup&#233;rer des donn&#233;es.</li><li><code>TypedMeasureColumns</code> : Valeur logique qui indique si les types sp&#233;cifi&#233;s dans le mod&#232;le multidimensionnel ou tabulaire sont utilis&#233;s pour les types des colonnes de mesure ajout&#233;es. Quand sa valeur est false, le type &#171;&#160;number&#160;&#187; est utilis&#233; pour toutes les colonnes de mesure. La valeur par d&#233;faut de cette option est false.</li><li><code>Culture</code> : Nom de culture sp&#233;cifiant la culture des donn&#233;es. Correspond &#224; la propri&#233;t&#233; de cha&#238;ne de connexion &#171;&#160;Locale Identifier&#160;&#187;.</li><li><code>CommandTimeout</code> : D&#233;lai qui contr&#244;le le temps d’ex&#233;cution d’une requ&#234;te c&#244;t&#233; serveur avant que celle-ci ne soit annul&#233;e. La valeur par d&#233;faut d&#233;pend du pilote.</li><li><code>ConnectionTimeout</code> : D&#233;lai qui contr&#244;le le temps d’attente avant l’abandon d’une tentative pour &#233;tablir une connexion au serveur. La valeur par d&#233;faut d&#233;pend du pilote.</li><li><code>SubQueries</code> : Nombre (0, 1 ou 2) qui d&#233;finit la valeur de la propri&#233;t&#233; &#171;&#160;SubQueries&#160;&#187; dans la cha&#238;ne de connexion. Il contr&#244;le le comportement des membres calcul&#233;s dans les sous-s&#233;lections ou les sous-cubes. (La valeur par d&#233;faut est&#160;2).</li><li><code>Implementation</code></li></ul>    



## Category
Accessing data
