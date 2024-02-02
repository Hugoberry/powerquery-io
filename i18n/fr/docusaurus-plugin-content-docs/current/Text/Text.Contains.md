---
title: Text.Contains
---

# Text.Contains


## Description

Indique si le texte contient une sous-chaîne.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Détecte si <code>text</code> contient la valeur <code>substring</code>. Retourne true si la valeur est trouvée. Cette fonction ne prend pas en charge les caractères génériques ou les expressions régulières.       <br />      <br />      L’argument facultatif <code>comparer</code> peut être utilisé pour spécifier des comparaisons qui ne respectent pas la casse ou la culture et les paramètres régionaux.      Les comparateurs intégrés suivants sont disponibles dans le langage de formule :      <ul>        <li><code>Comparer.Ordinal</code> : Utilisé pour effectuer une comparaison ordinale respectant la casse</li>        <li><code>Comparer.OrdinalIgnoreCase</code> : Utilisé pour effectuer une comparaison ordinale ne respectant pas la casse</li>        <li> <code>Comparer.FromCulture</code> : Utilisé pour effectuer une comparaison prenant en compte la culture</li>      </ul>


## Examples

### Example #1 
Déterminez si le texte &#34; Hello World &#34; contient &#34; Hello &#34;.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2 
Déterminez si le texte &#34; Hello World &#34; contient &#34; hello &#34;.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3 
Recherchez si le texte &#34;Hello World&#34; contient &#34;hello&#34;, à l&#39;aide d&#39;un comparateur insensible à la casse.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
