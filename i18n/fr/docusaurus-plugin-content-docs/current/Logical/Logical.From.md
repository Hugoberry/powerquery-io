---
title: Logical.From
---

# Logical.From


Crée une logique à partir de la valeur spécifiée.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

Retourne une valeur <code>logical</code> du <code>value</code> spécifié. Si le <code>value</code> spécifié est <code>null</code>, <code>Logical.From</code> retourne <code>null</code>. Si le <code>value</code> spécifié est <code>logical</code>, <code>value</code> est retourné. Les valeurs des types suivants peuvent être converties en valeur <code>logical</code> :       <ul>        <li><code>text</code> : valeur <code>logical</code> à partir de la valeur de texte, soit <code>"true"</code>, soit <code>"false"</code>. Référez-vous à <code>Logical.FromText</code> pour plus de détails.</li>        <li><code>number</code> : <code>false</code> si <code>value</code> est égal à <code>0</code>, sinon <code>true</code>.</li>      </ul>Si <code>value</code> est d'un autre type, une erreur est retournée.


## Examples

### Example #1 
Convertit &lt;code&gt;2&lt;/code&gt; en une valeur &lt;code&gt;logical&lt;/code&gt;.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
