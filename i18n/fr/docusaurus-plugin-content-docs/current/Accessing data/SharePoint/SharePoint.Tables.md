---
title: SharePoint.Tables
---

# SharePoint.Tables


Retourne une table qui contient le contenu d&#39;une liste SharePoint.


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Remarks

Retourne une table qui contient une ligne pour chaque élément de liste dans la liste SharePoint spécifiée <code>url</code>. Chaque ligne contient les propriétés de la liste. Vous pouvez spécifier <code>options</code> pour contrôler les options suivantes :    <ul><li><code>ApiVersion</code> : Nombre (14&#160;ou&#160;15) ou texte &#171;&#160;Auto&#160;&#187; sp&#233;cifiant la version de l&#39;API SharePoint &#224; utiliser pour ce site. Si aucune valeur n&#39;est sp&#233;cifi&#233;e, la version&#160;14 de l&#39;API est utilis&#233;e. Si la valeur Auto est sp&#233;cifi&#233;e, la version du serveur est d&#233;tect&#233;e automatiquement (si possible)&#160;; sinon, la version&#160;14 est utilis&#233;e par d&#233;faut. Les sites SharePoint qui ne sont pas en anglais n&#233;cessitent au moins la version&#160;15.</li><li><code>Implementation</code> : Facultatif. Sp&#233;cifie la version du connecteur Microsoft Office SharePoint Online &#224; utiliser. Les valeurs accept&#233;es sont &quot;2.0&quot; ou null. Si la valeur est &quot;2.0&quot;, l&#39;impl&#233;mentation 2.0 du connecteur Microsoft Office SharePoint Online est utilis&#233;e. Si la valeur est nulle, l&#39;impl&#233;mentation d&#39;origine du connecteur Microsoft Office SharePoint Online est utilis&#233;e.</li><li><code>ViewMode</code> : Facultatif. Cette option n&#39;est valable que pour l&#39;impl&#233;mentation 2.0. Les valeurs accept&#233;es sont &quot;All&quot; et &quot;Default&quot;. Si aucune valeur n&#39;est sp&#233;cifi&#233;e, la valeur est d&#233;finie sur &quot;Tous&quot;. Lorsque &quot;All&quot; est sp&#233;cifi&#233;, la vue inclut toutes les colonnes cr&#233;&#233;es par l&#39;utilisateur et d&#233;finies par le syst&#232;me. Lorsque &quot;Par d&#233;faut&quot; est sp&#233;cifi&#233;, la vue correspondra &#224; ce que l&#39;utilisateur voit lorsqu&#39;il consulte la liste en ligne dans la vue que l&#39;utilisateur a d&#233;finie comme Par d&#233;faut dans ses param&#232;tres. Si l&#39;utilisateur modifie sa vue par d&#233;faut pour ajouter ou supprimer des colonnes cr&#233;&#233;es par l&#39;utilisateur ou d&#233;finies par le syst&#232;me, ou en cr&#233;ant une nouvelle vue et en la d&#233;finissant par d&#233;faut, ces modifications se propageront via le connecteur.</li><li><code>DisableAppendNoteColumns</code> : Emp&#234;che le connecteur d’utiliser un point de terminaison distinct pour les colonnes de note.</li></ul>    



## Category
Accessing data
