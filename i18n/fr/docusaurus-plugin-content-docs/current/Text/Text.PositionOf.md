---
title: Text.PositionOf
---

# Text.PositionOf


## Description

Retourne la première position de la valeur (- 1 si introuvable).


## Syntax

```powerquery
Text.PositionOf(
    text as text,
    substring as text,
    optional occurrence as Occurrence.Type,
    optional comparer as function
) as any
```


## Details

Retourne la position de l’occurrence spécifiée de la valeur de texte <code>substring</code> trouvée dans <code>text</code>.    Un paramètre facultatif <code>occurrence</code> peut être utilisé pour spécifier la position d’occurrence à retourner (première occurrence par défaut).    Retourne -1 si <code>substring</code> est introuvable.       <div>        <code>comparer</code> est un <code>comparateur</code> utilisé pour contrôler la comparaison. Les comparateurs peuvent être utilisés pour fournir des comparaisons ne respectant pas la casse ou de culture et prenant en charge les paramètres régionaux.      </div>      <div>        Les comparateurs intégrés suivants sont disponibles dans le langage de formule :      </div>      <ul>        <li><code>Comparer.Ordinal</code> : Utilisé pour effectuer une opération exacte ou de comparaison ordinale</li>        <li><code> Comparer.OrdinalIgnoreCase </code> : utilisé pour effectuer une comparaison exacte ne respectant pas la casse</li>        <li> <code>Comparer.FromCulture</code> : utilisé pour effectuer une comparaison prenant en compte la culture</li>      </ul>


## Examples

### Example #1 
Obtient la position de la première occurrence de &#34; World &#34; dans le texte &#34; Hello, World! Hello, World! &#34;.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2 
Obtient la position de la dernière occurrence de &#34; World &#34; dans &#34; Hello, World! Hello, World! &#34;.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
