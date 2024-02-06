---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


Retourne les suites de rapport dans Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Remarks

Retourne une table de paquets multidimensionnels d'Adobe Analytics. Vous pouvez spécifier un paramètre d'enregistrement facultatif, <code>options</code>, pour contrôler les options suivantes :     <ul><li><code>HierarchicalNavigation</code> : Valeur logique (true/false) qui indique si les tables &#224; afficher doivent &#234;tre regroup&#233;es en fonction de leurs noms de sch&#233;mas (valeur par d&#233;faut&#160;: false).</li><li><code>MaxRetryCount</code> : Nombre de nouvelles tentatives &#224; effectuer lors de l&#39;interrogation du r&#233;sultat de la requ&#234;te. La valeur par d&#233;faut est 120.</li><li><code>RetryInterval</code> : Dur&#233;e entre les nouvelles tentatives. La valeur par d&#233;faut est de 1 seconde.</li><li><code>Implementation</code> : Sp&#233;cifie la version de l’API Adobe Analytics. Les valeurs valides sont&#160;: &#171; 2.0 &#187;. La valeur par d&#233;faut utilise l’API version 1.4.</li></ul>



## Category
Accessing data
