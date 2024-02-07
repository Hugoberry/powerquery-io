---
title: Salesforce.Data
---

# Salesforce.Data


Retourne les objets à partir du compte Salesforce.


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Remarks

Retourne les objets sur le compte Salesforce fourni dans les informations d'identification. Le compte est connecté par le biais de l'environnement <code>loginUrl</code> fourni. Si aucun environnement n'est fourni, le compte se connecte à la production (https://login.salesforce.com). Vous pouvez indiquer un paramètre d'enregistrement facultatif, <code>options</code>, pour spécifier des propriétés supplémentaires. L'enregistrement peut contenir les champs suivants :    <ul><li><code>CreateNavigationProperties</code> : Valeur logique (true/false) qui indique si des propri&#233;t&#233;s de navigation doivent &#234;tre g&#233;n&#233;r&#233;es pour les valeurs retourn&#233;es (valeur par d&#233;faut&#160;: false).</li><li><code>ApiVersion</code> : Version de l&#39;API Salesforce &#224; utiliser pour cette requ&#234;te. Si elle n&#39;est pas sp&#233;cifi&#233;e, la version&#160;29.0 de l&#39;API est utilis&#233;e.</li><li><code>Timeout</code> : Dur&#233;e qui contr&#244;le le temps d’attente avant l’abandon de la demande envoy&#233;e au serveur. La valeur par d&#233;faut est propre &#224; la source.</li></ul>    



## Category
Accessing data
