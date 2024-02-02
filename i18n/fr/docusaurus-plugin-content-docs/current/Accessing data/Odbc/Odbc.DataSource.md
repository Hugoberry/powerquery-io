---
title: Odbc.DataSource
---

# Odbc.DataSource


## Description

Retourne une table de tables et d&#39;onglets SQL à partir de la source de données ODBC. 


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Details

Retourne une table de tables et de vues SQL à partir de la source de données ODBC spécifiée par la chaîne de connexion <code>connectionString</code>. <code>connectionString</code> peut être du texte ou un enregistrement de paires propriété-valeur. Les valeurs de propriété peuvent être du texte ou un nombre. Vous pouvez fournir un paramètre d'enregistrement facultatif <code>options</code> pour spécifier des propriétés supplémentaires. L'enregistrement peut contenir les champs suivants :    <ul><li><code>CreateNavigationProperties</code> : Valeur logique (true/false) qui indique si des propri&#233;t&#233;s de navigation doivent &#234;tre g&#233;n&#233;r&#233;es pour les valeurs retourn&#233;es (valeur par d&#233;faut&#160;: true).</li><li><code>HierarchicalNavigation</code> : Valeur logique (true/false) qui indique si les tables &#224; afficher doivent &#234;tre regroup&#233;es en fonction de leurs noms de sch&#233;mas (valeur par d&#233;faut&#160;: false).</li><li><code>ConnectionTimeout</code> : D&#233;lai qui contr&#244;le le temps d’attente avant l’abandon d’une tentative pour &#233;tablir une connexion au serveur. La valeur par d&#233;faut est 15&#160;secondes.</li><li><code>CommandTimeout</code> : D&#233;lai qui contr&#244;le le temps d’ex&#233;cution d’une requ&#234;te c&#244;t&#233; serveur avant que celle-ci ne soit annul&#233;e. La valeur par d&#233;faut correspond &#224; dix&#160;minutes.</li><li><code>SqlCompatibleWindowsAuth</code> : Logique (true/false) qui d&#233;termine la cr&#233;ation d&#39;options de cha&#238;ne de connexion compatible avec SQL Server pour l&#39;authentification Windows. La valeur par d&#233;faut est true.</li></ul>


## Examples

### Example #1 
Renvoie les tables et vues SQL à partir de la chaîne de connexion fournie.
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
