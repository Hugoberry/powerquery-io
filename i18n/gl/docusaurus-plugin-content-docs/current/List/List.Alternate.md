---
title: List.Alternate
---

# List.Alternate


## Description

Devolve unha lista que contén todos os elementos de desprazamento con números impares nunha lista.


## Syntax

```powerquery
List.Alternate(
    list as list,
    count as number,
    optional repeatInterval as number,
    optional offset as number
) as list
```


## Details

Devolve unha lista que contén todos os elementos de desprazamento con números impares nunha lista. Alterna entre obter e ignorar valores da lista <code>list</code> segundo os parámetros.    <ul>    <li><code>count</code>: especifica o número de valores que se van ignorar cada vez.</li>    <li><code>repeatInterval</code>: un intervalo de repetición opcional para indicar o número de valores que se engaden entre os valores ignorados.</li>    <li><code>offset</code>: un parámetro de desprazamento opcional para comezar ignorando os valores no desprazamento inicial.</li>    </ul>


## Examples

### Example #1 
Crear unha lista de \{1..10} que ignora o primeiro número.
```powerquery
List.Alternate({1..10}, 1)
```

Result: 
```powerquery
{2, 3, 4, 5, 6, 7, 8, 9, 10}
```


### Example #2 
Crear unha lista de \{1..10} que ignora calquera outro número.
```powerquery
List.Alternate({1..10}, 1, 1)
```

Result: 
```powerquery
{2, 4, 6, 8, 10}
```


### Example #3 
Crear unha lista de \{1..10} que comeza en 1 e ignora calquera outro número.
```powerquery
List.Alternate({1..10}, 1, 1, 1)
```

Result: 
```powerquery
{1, 3, 5, 7, 9}
```


### Example #4 
Crear unha lista de \{1..10} que comeza en 1, ignora un valor, mantén dous valores, etc.
```powerquery
List.Alternate({1..10}, 1, 2, 1)
```

Result: 
```powerquery
{1, 3, 4, 6, 7, 9, 10}
```




## Category
List.Selection
