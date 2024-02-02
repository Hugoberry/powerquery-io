---
title: Binary.From
---

# Binary.From


## Description

Crée un binaire à partir de la valeur spécifiée


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

Retourne une valeur <code>binary</code> du <code>value</code> spécifié. Si le <code>value</code> spécifié est <code>null</code>, <code>Binary.From</code> retourne <code>null</code>. Si le <code>value</code> spécifié est <code>binary</code>, <code>value</code> est retourné. Les valeurs des types suivants peuvent être converties en valeur <code>binary</code> :       <ul>        <li><code>text</code> : valeur <code>binary</code> à partir de la représentation de texte. Référez-vous à <code>Binary.FromText</code> pour plus de détails.</li>      </ul>Si <code>value</code> est d'un autre type, une erreur est retournée.


## Examples

### Example #1 
Obtient la valeur &lt;code&gt;binary&lt;/code&gt; de &lt;code&gt;&#34;1011&#34;&lt;/code&gt;.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
