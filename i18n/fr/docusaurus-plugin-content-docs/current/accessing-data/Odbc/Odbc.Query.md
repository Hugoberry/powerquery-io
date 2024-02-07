---
title: Odbc.Query
---

# Odbc.Query


Retourne le résultat de l&#39;exécution d&#39;une requête native sur une source de données ODBC.


## Syntax

```powerquery
Odbc.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Retourne le résultat de l'exécution de <code>query</code> avec la chaîne de connexion <code>connectionString</code> en utilisant ODBC. <code>connectionString</code> peut être du texte ou un enregistrement de paires propriété-valeur. Les valeurs de propriété peuvent être du texte ou un nombre. Vous pouvez fournir un paramètre d'enregistrement facultatif <code>options</code> pour spécifier des propriétés supplémentaires. L'enregistrement peut contenir les champs suivants :    <ul><li><code>ConnectionTimeout</code> : D&#233;lai qui contr&#244;le le temps d’attente avant l’abandon d’une tentative pour &#233;tablir une connexion au serveur. La valeur par d&#233;faut est 15&#160;secondes.</li><li><code>CommandTimeout</code> : D&#233;lai qui contr&#244;le le temps d’ex&#233;cution d’une requ&#234;te c&#244;t&#233; serveur avant que celle-ci ne soit annul&#233;e. La valeur par d&#233;faut correspond &#224; dix&#160;minutes.</li><li><code>SqlCompatibleWindowsAuth</code> : Logique (true/false) qui d&#233;termine la cr&#233;ation d&#39;options de cha&#238;ne de connexion compatible avec SQL Server pour l&#39;authentification Windows. La valeur par d&#233;faut est true.</li></ul>


## Examples

### Example #1 
Renvoie le résultat de l&#39;exécution d&#39;une requête simple sur la chaîne de connexion fournie.
```powerquery
Odbc.Query("dsn=your_dsn", "select * from Customers")
```

Result: 
```powerquery
table
```




## Category
Accessing data
