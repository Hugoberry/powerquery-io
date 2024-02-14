---
title: Number.From
---

# Number.From


Crée un nombre à partir de la valeur spécifiée.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Retourne une valeur <code>number</code> du <code>value</code> spécifié. Vous pouvez également fournir un <code>culture</code> facultatif (par exemple, "fr-fr").Si le <code>value</code> spécifié est <code>null</code>, <code>Number.From</code> retourne <code>null</code>. Si le <code>value</code> spécifié est <code>number</code>, <code>value</code> est retourné. Les valeurs des types suivants peuvent être converties en valeur <code>number</code> :      <ul>        <li><code>text</code> : valeur <code>number</code> depuis la représentation de texte. Les formats de texte courants sont ("15", "3,423.10", "5.0E-10"). Référez-vous à <code>Number.FromText</code> pour plus de détails.</li>        <li><code>logical</code> : 1 pour <code>true</code>, 0 pour <code>false</code>.</li>        <li><code>datetime</code> : nombre à virgule flottante double précision qui contient une date OLE Automation équivalente.</li>        <li><code>datetimezone</code> : nombre à virgule flottante double précision qui contient une date OLE Automation équivalente à la date et à l'heure locale de <code>value</code>.</li>        <li><code>date</code> : nombre à virgule flottante double précision qui contient une date OLE Automation équivalente.</li>        <li><code>time</code> : exprimé en fractions de jours.</li>        <li><code>duration</code> : exprimé en fractions de jours et en jours complets.</li>      </ul>Si <code>value</code> est d'un autre type, une erreur est retournée.


## Examples

### Example #1 
Obtient la valeur &lt;code&gt;number&lt;/code&gt; de &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Obtient la valeur &lt;code&gt;number&lt;/code&gt; de &lt;code&gt;#datetime(2020, 3, 20, 6, 0, 0)&lt;/code&gt;.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3 
Obtenez la valeur &lt;code&gt;number&lt;/code&gt; de &lt;code&gt;&#34;12.3%&#34;&lt;/code&gt;.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
