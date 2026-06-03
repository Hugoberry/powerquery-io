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

Évalue `query` `target` en utilisant les paramètres spécifiés dans `parameters` et les options spécifiées dans `options`.

La sortie de la requête est définie par `target`.

`target` fournit le contexte pour l'opération décrite par `query`.

`query` décrit la requête à exécuter sur `target`. `query` est exprimé d'une manière spécifique à `target` (par exemple, une instruction T-SQL).

La valeur `parameters` facultative peut contenir soit une liste, soit un enregistrement, selon le cas, pour fournir les valeurs de paramètre attendues par `query`.

L'`options`enregistrement facultatif peut contenir des options qui affectent le comportement d'évaluation de `query` contre `target`. Ces options sont spécifiques à `target`.



## Category
Values
