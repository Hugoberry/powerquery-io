---
title: Double.From
---

# Double.From


Crée une valeur double à partir de la valeur donnée.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Retourne une valeur double <code>number</code> du <code>value</code> donné. Si le <code>value</code> donné est <code>null</code>, <code>Double.From</code> retourne <code>null</code>. Si le <code>value</code> donné est <code>number</code> dans la plage de valeurs doubles, <code>value</code> est retourné. dans le cas contraire, une erreur est retournée. Si <code>value</code> donné est d'un autre type, il sera converti en valeur <code>number</code> en utilisant<code>Number.FromText</code>. Vous pouvez également fournir un <code>culture</code> facultatif (par exemple, "fr-fr").


## Examples

### Example #1 
Obtenez la valeur double &lt;code&gt;number&lt;/code&gt; de &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
