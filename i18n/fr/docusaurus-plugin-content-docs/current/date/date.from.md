---
title: Date.From
---

# Date.From


Crée une date à partir de la valeur spécifiée.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Remarks

Retourne une valeur <code>date</code> du <code>value</code> spécifié. Vous pouvez également fournir un <code>culture</code> facultatif (par exemple, "fr-fr").Si le <code>value</code> spécifié est <code>null</code>, <code>Date.From</code> retourne <code>null</code>. Si le <code>value</code> spécifié est <code>date</code>, <code>value</code> est retourné. Les valeurs des types suivants peuvent être converties en valeur <code>date</code> :       <ul>        <li><code>text</code> : valeur <code>date</code> à partir de la représentation de texte. Référez-vous à <code>Date.FromText</code> pour plus de détails.</li>        <li><code>datetime</code> : composant de date de <code>value</code>.</li>        <li><code>datetimezone</code> : composant de date du datetime local équivalent à <code>value</code>.</li>        <li><code>number</code> : composant de date de l'équivalent datetime de la date OLE Automation exprimée par <code>value</code>.</li>      </ul>Si <code>value</code> est d'un autre type, une erreur est retournée.


## Examples

### Example #1 
Convertit &lt;code&gt;43910&lt;/code&gt; en une valeur &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #2 
Convertit &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; en une valeur &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```




## Category
Date
