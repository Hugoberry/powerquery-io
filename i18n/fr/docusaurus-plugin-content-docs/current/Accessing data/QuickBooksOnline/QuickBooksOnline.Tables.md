---
title: QuickBooksOnline.Tables
---

# QuickBooksOnline.Tables


Importez les données à partir de QuickBooks Online.


## Syntax

```powerquery
QuickBooksOnline.Tables(
    optional options as record
) as table
```


## Remarks

      Retourne une table listant les tables disponibles dans QuickBooks Online. Vous pouvez spécifier un paramètre d'enregistrement facultatif, <code>options</code>, pour gérer les options suivantes :      <ul>        <li><code>ConnectionTimeout</code>: Durée qui détermine le temps d'attente avant d'abandonner une tentative de connexion au serveur.</li>        <li><code>CommandTimeout</code>: Durée qui détermine le temps d'exécution autorisé de la requête côté serveur avant qu'elle ne soit annulée.</li>      </ul>    Le paramètre d'enregistrement est spécifié sous la forme [option1 = value1, option2 = value2...].    


