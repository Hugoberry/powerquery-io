---
title: Duration.From
---

# Duration.From


## Description

Crée une durée à partir de la valeur spécifiée.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Details

Retourne une valeur <code>duration</code> du <code>value</code> spécifié. Si le <code>value</code> spécifié est <code>null</code>, <code>Duration.From</code> retourne <code>null</code>. Si le <code>value</code> spécifié est <code>duration</code>, <code>value</code> est retourné. Les valeurs des types suivants peuvent être converties en valeur <code>duration</code> :       <ul>        <li><code>text</code> : valeur <code>duration</code> obtenue à partir d'un format textuel de temps écoulé (d.h:m:s). Référez-vous à <code>Duration.FromText</code> pour plus de détails.</li>        <li><code>number</code> : <code>duration</code> équivalente au nombre de jours entiers ou de fractions de jours exprimés par <code>value</code>.</li>      </ul>Si <code>value</code> est d'un autre type, une erreur est retournée.


## Examples

### Example #1 
Convertit &lt;code&gt;2.525&lt;/code&gt; dans une valeur &lt;code&gt;duration&lt;/code&gt;.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```




## Category
Duration
