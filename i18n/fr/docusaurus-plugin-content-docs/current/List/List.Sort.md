---
title: List.Sort
---

# List.Sort


Trie une liste de données selon les critères spécifiés.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Remarks

Trie une liste de données, <code>list</code>, selon les critères facultatifs spécifiés.    Un paramètre facultatif, <code>comparisonCriteria</code>, peut être spécifié comme critère de comparaison. Les valeurs suivantes peuvent être utilisées :     <ul>    <li> Pour contrôler l'ordre, le critère de comparaison peut être une valeur d'énumération d'ordre. (<code>Order.Descending</code>, <code>Order.Ascending</code>). </li>    <li> Pour calculer une clé utilisée pour le tri, une fonction d'1 argument peut être utilisée. </li>    <li> Pour sélectionner une clé et contrôler l'ordre, le critère de comparaison peut être une liste contenant la clé et l'ordre (<code>\{each 1 / _, Order.Descending}</code>). </li>    <li> Pour contrôler complètement la comparaison, une fonction de 2 arguments peut être utilisée. Cette fonction recevra deux éléments de la liste (deux éléments quelconques, dans n'importe quel ordre). La fonction doit renvoyer l'une des valeurs suivantes :         <ul>            <li> <code>-1</code> : Le premier élément est inférieur au deuxième élément.</li>            <li> <code>0</code> : Les éléments sont égaux.</li>            <li> <code>1</code> : Le premier élément est supérieur au deuxième élément.</li>        </ul>        Value.Compare est une méthode qui peut être utilisé pour déléguer cette logique. </li>    </ul>


## Examples

### Example #1 
Trie la liste \{2, 3, 1}.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2 
Trie la liste \{2, 3, 1} dans l&#39;ordre décroissant.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3 
Trie la liste \{2, 3, 1} dans l&#39;ordre décroissant en utilisant la méthode Value.Compare.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
