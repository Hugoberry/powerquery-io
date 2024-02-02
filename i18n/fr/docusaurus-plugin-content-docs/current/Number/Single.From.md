---
title: Single.From
---

# Single.From


## Description

Crée une valeur unique à partir de la valeur donnée.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Details

Retourne une valeur simple<code>number</code> du <code>value</code> donné. Si le <code>value</code> donné est <code>null</code>, <code>Single.From</code> retourne <code>null</code>. Si le <code>value</code> donné est <code>number</code> dans la plage de valeurs simples, <code>value</code> est retourné. dans le cas contraire, une erreur est retournée. Si <code>value</code> donné est d'un autre type, il sera converti en valeur <code>number</code> en utilisant<code>Number.FromText</code>. Vous pouvez également fournir un <code>culture</code> facultatif (par exemple, "fr-fr").


## Examples

### Example #1 
Obtenez la valeur unique &lt;code&gt;number&lt;/code&gt; de &lt;code&gt;&#34;1.5&#34;&lt;/code&gt;.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
