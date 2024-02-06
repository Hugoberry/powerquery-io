---
title: Value.NativeQuery
---

# Value.NativeQuery


Évalue une requête par rapport à une cible.


## Syntax

```powerquery
Value.NativeQuery(
    target as any,
    query as text,
    optional parameters as any,
    optional options as record
) as any
```


## Remarks

Évalue <code>query</code> <code>target</code> en utilisant les paramètres spécifiés dans <code>parameters</code> et les options spécifiées dans <code>options</code>.<br />La sortie de la requête est définie par <code>target</code>.<br /><code>target</code> fournit le contexte pour l'opération décrite par <code>query</code>.<br /><code>query</code> décrit la requête à exécuter sur <code>target</code>. <code>query</code> est exprimé d'une manière spécifique à <code>target</code> (par exemple, une instruction T-SQL).<br />La valeur <code>parameters</code> facultative peut contenir soit une liste, soit un enregistrement, selon le cas, pour fournir les valeurs de paramètre attendues par <code>query</code>.<br />L'<code>options</code>enregistrement facultatif peut contenir des options qui affectent le comportement d'évaluation de <code>query</code> contre <code>target</code>. Ces options sont spécifiques à <code>target</code>.<br />



## Category
Values
