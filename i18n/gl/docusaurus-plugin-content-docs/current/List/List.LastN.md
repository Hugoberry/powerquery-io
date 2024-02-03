---
title: List.LastN
---

# List.LastN


## Description

Devolve o último valor da lista.  Opcionalmente pode especificar o número de valores que vai devolver ou unha condición de cualificación.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Details

Devolve o último elemento da lista <code>list</code>. Se a lista está baleira, xérase unha excepción. Esta función acepta un parámetro opcional, <code>countOrCondition</code>, para admitir recompilar varios elementos ou elementos de filtrado. <code>countOrCondition</code> pódese especificar de tres maneiras: <ul>  <li>Se se especifica un número, devólvense os elementos ata chegar a ese número. </li>  <li>Se se especifica unha condición, devólvense todos os elementos que inicialmente cumpren a condición, comezando ao final da lista. Cando un elemento non cumpre a condición, non se teñen en conta máis elementos. </li>  <li>Se este parámetro é nulo devólvese o último elemento da lista.</li> </ul>


## Examples

### Example #1 
Buscar o último valor da lista \{3, 4, 5, -1, 7, 8, 2}.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2 
Buscar os últimos valores da lista \{3, 4, 5, -1, 7, 8, 2} que son maiores que 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
