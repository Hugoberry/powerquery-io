---
title: List.Alternate
---

# List.Alternate


## Description

Retorna uma lista composta por todos os elementos de deslocamento de número ímpar em uma lista.


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

Retorna uma lista composta por todos os elementos de deslocamento de número ímpar em uma lista. Alterna entre o uso e não uso de valores na lista <code>list</code>, dependendo dos parâmetros.    <ul>    <li><code>count</code>: Especifica o número de valores que foram ignorados cada vez.</li>    <li><code>repeatInterval</code>: Um intervalo de repetição opcional para indicar quantas valores são adicionados entre os valores ignorados.</li>    <li><code>offset</code>: Um parâmetro de deslocamento opcional para começar a ignorar os valores no deslocamento inicial.</li>    </ul>


## Examples

### Example #1 
Crie uma lista a partir de \{1..10} que ignore o primeiro número.
```powerquery
List.Alternate({1..10}, 1)
```

Result: 
```powerquery
{2, 3, 4, 5, 6, 7, 8, 9, 10}
```


### Example #2 
Crie uma lista a partir de \{1..10} que ignore todos os outros números.
```powerquery
List.Alternate({1..10}, 1, 1)
```

Result: 
```powerquery
{2, 4, 6, 8, 10}
```


### Example #3 
Crie uma lista a partir de \{1..10} que comece em 1 e ignore todos os outros números.
```powerquery
List.Alternate({1..10}, 1, 1, 1)
```

Result: 
```powerquery
{1, 3, 5, 7, 9}
```


### Example #4 
Crie uma lista a partir de \{1..10} que comece em 1, ignore um valor, mantenha dois valores e assim por diante.
```powerquery
List.Alternate({1..10}, 1, 2, 1)
```

Result: 
```powerquery
{1, 3, 4, 6, 7, 9, 10}
```




## Category
List.Selection
