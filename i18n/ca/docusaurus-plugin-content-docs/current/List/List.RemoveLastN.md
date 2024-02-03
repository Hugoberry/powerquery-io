---
title: List.RemoveLastN
---

# List.RemoveLastN


## Description

Retorna una llista que suprimeix el nombre especificat d&#39;elements del final de la llista.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Retorna una llista que suprimeix els últims <code>countOrCondition</code> elements del final de la llista <code>list</code>. Si <code>list</code> té menys de <code>countOrCondition</code> elements, es retorna una llista buida. <ul> <li>Si s'especifica un nombre, se suprimeix el mateix nombre d'elements com a màxim. </li> <li>Si s'especifica una condició, la llista retornada acaba amb el primer element de la part inferior de <code>list</code> que compleixi els criteris. Quan un element no compleixi la condició, no es consideraran més elements. </li> <li>Si aquest paràmetre té el valor nul, només se suprimeix un element. </li> </ul>


## Examples

### Example #1 
Crea una llista a partir de \{1, 2, 3, 4, 5} sense els últims 3 nombres.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Crea una llista a partir de \{5, 4, 2, 6, 4} que acaba amb un nombre més petit que 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
