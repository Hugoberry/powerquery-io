---
title: Text.EndsWith
---

# Text.EndsWith


## Description

Indique si le texte se termine par la valeur spécifiée.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Indique si le texte spécifié, <code>text</code>, se termine par la valeur spécifiée, <code>substring</code>. L’indication respecte la casse.       <div>        <code>comparer</code> est un <code>comparateur</code> utilisé pour contrôler la comparaison. Les comparateurs peuvent être utilisés pour fournir des comparaisons ne respectant pas la casse ou de culture et prenant en charge les paramètres régionaux.      </div>      <div>        Les comparateurs intégrés suivants sont disponibles dans le langage de formule :      </div>      <ul>        <li><code>Comparer.Ordinal</code> : Utilisé pour effectuer une opération exacte ou de comparaison ordinale</li>        <li><code> Comparer.OrdinalIgnoreCase </code>: utilisé pour effectuer une comparaison exacte ne respectant pas la casse</li>        <li> <code>Comparer.FromCulture</code> : utilisé pour effectuer une comparaison prenant en compte la culture</li>      </ul>


## Examples

### Example #1 
Vérifiez si &#34; Hello, World &#34; se termine par &#34; world &#34;.
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2 
Vérifiez si &#34; Hello, World &#34; se termine par &#34; World &#34;.
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
