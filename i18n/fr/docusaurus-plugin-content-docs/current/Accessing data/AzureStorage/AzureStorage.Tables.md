---
title: AzureStorage.Tables
---

# AzureStorage.Tables


Retourne une table de navigation avec les tables trouvées dans le compte spécifié à partir d&#39;un coffre de stockage Windows Azure.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Remarks

Retourne une table de navigation contenant une ligne pour chaque table trouvée à l’URL de compte <code>account</code> à partir d’un coffre de stockage Azure. Chaque ligne contient un lien vers la table Azure. Le paramètre d’enregistrement facultatif <code>options</code> peut être fourni pour spécifier des propriétés supplémentaires. L’enregistrement peut contenir les champs suivants :    <ul><li><code>Timeout</code> : Dur&#233;e qui contr&#244;le le temps d’attente avant l’abandon de la demande envoy&#233;e au serveur. La valeur par d&#233;faut est propre &#224; la source.</li></ul>



## Category
Accessing data
