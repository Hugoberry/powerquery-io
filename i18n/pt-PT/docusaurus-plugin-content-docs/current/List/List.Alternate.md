---
title: List.Alternate
---

# List.Alternate


Devolve uma lista composta por todos os elementos de desvio com numeração ímpar existentes numa lista.


## Syntax

```powerquery
List.Alternate(
    list as list,
    count as number,
    optional repeatInterval as number,
    optional offset as number
) as list
```


## Remarks

Devolve uma lista composta por todos os elementos de desvio com numeração ímpar existentes numa lista. Alterna entre tomar e ignorar valores da lista <code>list</code> consoante os parâmetros.    <ul>    <li><code>count</code>: especifica o número de valores que são ignorados de cada vez.</li>    <li><code>repeatInterval</code>: um intervalo de repetição opcional para indicar quantos valores são adicionados entre os valores ignorados.</li>    <li><code>offset</code>: um parâmetro de desvio opcional para começar a ignorar os valores no desvio inicial.</li>    </ul>


## Examples

### Example #1 
Criar uma lista a partir de \{1..10} que ignore o primeiro número.
```powerquery
List.Alternate({1..10}, 1)
```

Result: 
```powerquery
{2, 3, 4, 5, 6, 7, 8, 9, 10}
```


### Example #2 
Criar uma lista a partir de \{1..10} que ignore número sim, número não.
```powerquery
List.Alternate({1..10}, 1, 1)
```

Result: 
```powerquery
{2, 4, 6, 8, 10}
```


### Example #3 
Criar uma lista a partir de \{1..10} que comece em 1 e ignore número sim, número não.
```powerquery
List.Alternate({1..10}, 1, 1, 1)
```

Result: 
```powerquery
{1, 3, 5, 7, 9}
```


### Example #4 
Criar uma lista a partir de \{1..10} que comece em 1, ignore um valor, mantenha dois valores e assim consecutivamente.
```powerquery
List.Alternate({1..10}, 1, 2, 1)
```

Result: 
```powerquery
{1, 3, 4, 6, 7, 9, 10}
```




## Category
List.Selection
