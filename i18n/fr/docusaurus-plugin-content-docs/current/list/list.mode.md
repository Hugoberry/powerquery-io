---
title: List.Mode
---

# List.Mode


Retourne la valeur la plus fréquente dans la liste.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Remarks

Retourne l'élément qui apparaît le plus fréquemment dans la liste, <code>list</code>. Si la liste est vide, une exception est levée. Si plusieurs éléments avec la même fréquence maximale apparaissent, le dernier est sélectionné.    La valeur <code>comparisonCriteria</code> facultative, <code>equationCriteria</code>, peut être spécifiée pour contrôler le test d'égalité. 


## Examples

### Example #1 
Recherche l&#39;élément qui apparaît le plus fréquemment dans la liste &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5}&lt;/code&gt;.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2 
Recherche l&#39;élément qui apparaît le plus fréquemment dans la liste &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
