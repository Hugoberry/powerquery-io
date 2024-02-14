---
title: SharePoint.Files
---

# SharePoint.Files


Retourne une table qui contient les documents d&#39;un site SharePoint.


## Syntax

```powerquery
SharePoint.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

Retourne une table qui contient une ligne pour chaque document trouvé dans le site SharePoint spécifié, <code>url</code>, et les sous-dossiers. Chaque ligne contient les propriétés du dossier ou du fichier, et un lien vers son contenu. Vous pouvez spécifier <code>options</code> pour contrôler les options suivantes :    <ul><li><code>ApiVersion</code> : Nombre (14&#160;ou&#160;15) ou texte &#171;&#160;Auto&#160;&#187; sp&#233;cifiant la version de l&#39;API SharePoint &#224; utiliser pour ce site. Si aucune valeur n&#39;est sp&#233;cifi&#233;e, la version&#160;14 de l&#39;API est utilis&#233;e. Si la valeur Auto est sp&#233;cifi&#233;e, la version du serveur est d&#233;tect&#233;e automatiquement (si possible)&#160;; sinon, la version&#160;14 est utilis&#233;e par d&#233;faut. Les sites SharePoint qui ne sont pas en anglais n&#233;cessitent au moins la version&#160;15.</li></ul>    



## Category
Accessing data
