---
title: List.Modes
---

# List.Modes


Retourne la liste des valeurs les plus fréquentes dans la liste.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Retourne l'élément qui apparaît le plus fréquemment dans la liste, <code>list</code>. Si la liste est vide, une exception est levée. Si plusieurs éléments avec la même fréquence maximale apparaissent, le dernier est sélectionné.    La valeur <code>comparisonCriteria</code> facultative, <code>equationCriteria</code>, peut être spécifiée pour contrôler le test d'égalité. 


## Examples

### Example #1 
Recherche les éléments qui apparaît le plus fréquemment dans la liste &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
