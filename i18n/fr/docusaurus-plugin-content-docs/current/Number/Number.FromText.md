---
title: Number.FromText
---

# Number.FromText


## Description

Crée des numéros à partir des formats de texte communs (&#34; 15 &#34;, &#34; 3,423.10 &#34;, &#34; 5.0E-10 &#34;).


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Details

Retourne une valeur <code>number</code> à partir de la valeur de texte <code>text</code> spécifiée. <ul>  <li><code>text</code> : représentation texte d’une valeur de nombre. La représentation doit être dans un format numérique courant, tel que " 15 ", " 3,423.10 " ou " 5.0E-10 ".</li>  <li><code>culture</code> : une culture facultative qui contrôle la façon dont <code>text</code> est interprété (par exemple, "fr-fr").</li> </ul>


## Examples

### Example #1 
Obtient la valeur de nombre de &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2 
Obtient la valeur de nombre de &lt;code&gt;&#34;5.0e-10&#34;&lt;/code&gt;.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
