---
title: Text.StartsWith
---

# Text.StartsWith


Indique si le texte démarre par la valeur spécifiée.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Retourne true si la valeur de texte <code>text</code> commence par la valeur de texte <code>substring</code>.      <ul>        <li><code>text</code>: <i></i> Valeur <code>texte</code> à rechercher</li>        <li><code>substring</code>: <i></i> Valeur de <code>de texte</code> à rechercher dans <code>substring</code></li>        <li><code>comparer</code>: <i>[Optional]</i> Une <code>de comparaison de</code> utilisée pour contrôler la comparaison. Par exemple, <code>comparer.OrdinalIgnoreCase</code> peut être utilisé pour effectuer des recherches qui ne respectent pas la casse</li>      </ul>      <div>        <code>comparer</code> est un <code>comparateur</code> qui est utilisé pour contrôler la comparaison. Les comparateurs peuvent être utilisés pour fournir des comparaisons ne respectant pas la casse ou en respectant la culture et les paramètres régionaux.       </div>      <div>        Les comparateurs intégrés suivants sont disponibles dans le langage de formule :      </div>      <ul>        <li><code>Comparer.Ordinal</code> : Utilisé pour effectuer une opération exacte ou comparaison</li>        <li><code>comparer.OrdinalIgnoreCase</code> : utilisé pour effectuer une comparaison exacte ne respectant pas la casse</li>        <li> <code>Comparer.FromCulture</code> : utilisé pour effectuer une comparaison prenant en compte la culture</li>      </ul>


## Examples

### Example #1 
Vérifie si le texte &#34; Hello, World &#34; commence par le texte &#34; hello &#34;.
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2 
Vérifie si le texte &#34; Hello, World &#34; commence par le texte &#34; Hello &#34;.
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
