---
title: Time.From
---

# Time.From


Crée une heure à partir de la valeur spécifiée.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

Retourne une valeur <code>time</code> du <code>value</code> spécifié. Vous pouvez également fournir un <code>culture</code> facultatif (par exemple, "fr-fr").Si le <code>value</code> spécifié est <code>null</code>, <code>Time.From</code> retourne <code>null</code>. Si le <code>value</code> spécifié est <code>time</code>, <code>value</code> est retourné. Les valeurs des types suivants peuvent être converties en valeur <code>time</code> :       <ul>        <li><code>text</code> : valeur <code>time</code> à partir de la représentation de texte. Référez-vous à <code>Time.FromText</code> pour plus de détails.</li>        <li><code>datetime</code> : composant d'heure de <code>value</code>.</li>        <li><code>datetimezone</code> : composant d'heure du datetime local équivalent à <code>value</code>.</li>        <li><code>number</code> : <code>time</code> équivalente au nombre de jours entiers ou de fractions de jours exprimés par <code>value</code>. Si <code>value</code> est négatif, ou supérieur ou égale à 1, une erreur est retournée.</li>      </ul>Si <code>value</code> est d'un autre type, une erreur est retournée.


## Examples

### Example #1 
Convertit &lt;code&gt;0.7575&lt;/code&gt; en une valeur &lt;code&gt;time&lt;/code&gt;.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2 
Convertit &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; en une valeur &lt;code&gt;time&lt;/code&gt;.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
