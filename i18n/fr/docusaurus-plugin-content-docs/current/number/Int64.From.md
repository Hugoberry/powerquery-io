---
title: Int64.From
---

# Int64.From


Crée un entier 64 bits à partir de la valeur donnée.


## Syntax

```powerquery
Int64.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Retourne une valeur entière 64 bits <code>number</code> du <code>value</code> donné. Si le <code>value</code> donné est <code>null</code>, <code>Int64.From</code> retourne <code>null</code>. Si le <code>value</code> donné est <code>number</code> dans la plage d'entiers 64 bits sans partie fractionnaire, <code>value</code> est retourné. S'il comprend une partie fractionnaire, le nombre est arrondi selon le mode d'arrondi spécifié. Le mode d'arrondi par défaut est <code>RoundingMode.ToEven</code>. Si <code>value</code> donné est d'un autre type, il sera converti en valeur <code>number</code> en utilisant<code>Number.FromText</code>. Référez-vous à <code>Number.Round</code> pour les modes d'arrondi disponibles. Vous pouvez également fournir un <code>culture</code> facultatif (par exemple, "fr-fr").


## Examples

### Example #1 
Obtenez la valeur entière 64 bits &lt;code&gt;number&lt;/code&gt; de &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Int64.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Obtenez la valeur entière de 64 bits &lt;code&gt;number&lt;/code&gt; de &lt;code&gt;&#34;4.5&#34;&lt;/code&gt; en utilisant &lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt;.
```powerquery
Int64.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
