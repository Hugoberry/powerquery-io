---
title: Currency.From
---

# Currency.From


Retourne une valeur de devise à partir de la valeur spécifiée.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Retourne une valeur <code>currency</code> à partir de l'élément <code>value</code> spécifié. Si l'élément <code>value</code> spécifié est <code>null</code>, <code>Currency.From</code> retourne <code>null</code>. Si l'élément <code>value</code> spécifié est <code>number</code> dans la plage valide des devises, la partie fractionnaire de <code>value</code> est arrondie à 4 chiffres décimaux et est retournée. Si <code>value</code> donné est d'un autre type, il sera premièrement converti en valeur <code>number</code> en utilisant<code>Number.FromText</code>. La plage valide pour une devise va de <code>-922,337,203,685,477.5808</code> à <code>922,337,203,685,477.5807</code>. Référez-vous à <code>Number.Round</code> pour les modes d'arrondi disponibles. Le mode par défaut est <code>RoundingMode.ToEven</code>. Vous pouvez également fournir un <code>culture</code> facultatif (par exemple, "fr-fr").


## Examples

### Example #1 
Obtenir la valeur &lt;code&gt;currency&lt;/code&gt; de &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt;.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2 
Obtenez la valeur &lt;code&gt;currency&lt;/code&gt; de &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt; en utilisant &lt;code&gt;RoundingMode.Down&lt;/code&gt;.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
