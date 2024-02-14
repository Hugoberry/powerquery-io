---
title: DateTime.From
---

# DateTime.From


Crée un datetime à partir de la valeur spécifiée.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

Retourne une valeur <code>datetime</code> du <code>value</code> spécifié. Vous pouvez également fournir un <code>culture</code> facultatif (par exemple, "fr-fr").Si le <code>value</code> spécifié est <code>null</code>, <code>DateTime.From</code> retourne <code>null</code>. Si le <code>value</code> spécifié est <code>datetime</code>, <code>value</code> est retourné. Les valeurs des types suivants peuvent être converties en valeur <code>datetime</code> :       <ul>        <li><code>text</code> : valeur <code>datetime</code> depuis la représentation de texte. Référez-vous à <code>DateTime.FromText</code> pour plus de détails.</li>        <li><code>date</code> : <code>datetime</code> avec <code>value</code> comme composant de date et <code>12:00:00 AM</code> comme composant d'heure.</li>        <li><code>datetimezone</code> : équivalent <code>datetime</code> local de <code>value</code>.</li>        <li><code>time</code> : <code>datetime</code> avec l'équivalent de date de la date OLE Automation de <code>0</code> comme composant de date et <code>value</code> comme composant d'heure.</li>        <li><code>number</code> : équivalent <code>datetime</code> de la date OLE Automation exprimée par <code>value</code>. </li>      </ul>Si <code>value</code> est d'un autre type, une erreur est retournée.


## Examples

### Example #1 
Convertit &lt;code&gt;#time(06, 45, 12)&lt;/code&gt; en une valeur &lt;code&gt;datetime&lt;/code&gt;.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2 
Convertit &lt;code&gt;#date(1975, 4, 4)&lt;/code&gt; en une valeur &lt;code&gt;datetime&lt;/code&gt;.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
