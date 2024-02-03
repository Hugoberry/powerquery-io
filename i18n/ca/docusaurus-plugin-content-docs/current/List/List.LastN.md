---
title: List.LastN
---

# List.LastN


## Description

Retorna el darrer valor de la llista.  Pot especificar de manera opcional quants valors s&#39;han de retornar o una condició qualificada.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Details

Retorna el darrer element de la llista <code>list</code>. Si la llista és buida, es produeix una excepció. Aquesta funció pren un paràmetre opcional, <code>countOrCondition</code>, per admetre la recopilació de diversos elements o la filtració d'elements. <code>countOrCondition</code> es pot especificar de tres maneres: <ul>  <li>Si s'especifica un nombre, es retorna el mateix nombre d'elements com a màxim. </li>  <li>Si s'especifica una condició, es retornen tots els elements que inicialment compleixen la condició, començant pel final de la llista. Quan un element no compleixi la condició, no es consideraran més elements. </li>  <li>Si aquest paràmetre té el valor nul, es retorna el darrer element de la llista.</li> </ul>


## Examples

### Example #1 
Troba el darrer valor de la llista \{3, 4, 5, -1, 7, 8, 2}.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2 
Troba els darrers valors de la llista \{3, 4, 5, -1, 7, 8, 2} que són més grans que 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
