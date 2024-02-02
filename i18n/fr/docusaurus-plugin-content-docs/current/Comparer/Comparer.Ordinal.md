---
title: Comparer.Ordinal
---

# Comparer.Ordinal


## Description

Retourne une fonction de comparaison qui utilise les règles ordinales pour comparer des valeurs.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Details

Retourne une fonction de comparateur qui utilise des règles ordinales pour comparer les valeurs fournies <code>x</code> et <code>y</code>.<br /> <br />    Une fonction de comparateur accepte deux arguments et retourne -1, 0 ou 1 selon que la première valeur est inférieure, égale ou supérieure à la seconde.    


## Examples

### Example #1 
En utilisant les règles ordinales, comparez si &#34;encyclopédie&#34; et &#34;encyclopédie&#34; sont équivalentes. Notez qu&#39;ils sont équivalents en utilisant &lt;code&gt;Comparer.FromCulture(&#34;en-US&#34;)&lt;/code&gt;. 
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
