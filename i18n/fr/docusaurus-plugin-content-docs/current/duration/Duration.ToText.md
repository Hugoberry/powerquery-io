---
title: Duration.ToText
---

# Duration.ToText


Retourne le texte du format &#34; d.h:m:s &#34;.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

Retourne une représentation textuelle sous la forme " jour.heure:min:s " de la valeur de durée donnée, <code>duration</code>. <ul>        <li><code>duration</code> : durée (<code>duration</code>) utilisée pour calculer la représentation textuelle.</li>  <li><code>format</code> : <i>[Facultatif]</i> Déprécié, génère une erreur s'il n'est pas null</li>      </ul>


## Examples

### Example #1 
Convertit &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; dans une valeur de texte.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
