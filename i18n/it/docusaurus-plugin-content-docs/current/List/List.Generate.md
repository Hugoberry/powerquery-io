---
title: List.Generate
---

# List.Generate


## Description

Genera un elenco di valori.


## Syntax

```powerquery
List.Generate(
    initial as function,
    condition as function,
    next as function,
    optional selector as function
) as list
```


## Details

Genera un elenco di valori usando le funzioni fornite. La funzione <code>initial</code> genera un valore candidato iniziale, che viene quindi testato su <code>condition</code>. Se il valore candidato viene approvato, viene restituito come parte dell'elenco risultante,  e il successivo valore candidato viene generato passando il valore appena approvato a <code>next</code>. Quando un valore candidato non corrisponde <code>condition</code>, il processo di generazione dell'elenco si arresta. È anche possibile specificare un parametro facoltativo, <code>selector</code>, per trasformare gli elementi nell'elenco risultante.


## Examples

### Example #1 
Crea un elenco iniziando da dieci, decrementando ripetutamente di uno e assicurandoti che ogni elemento sia maggiore di zero.
```powerquery
List.Generate(() => 10, each _ > 0, each _ - 1)
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```


### Example #2 
Generare un elenco di record contenenti x e y, dove x è un valore e y è un elenco. x deve essere meno di 10 e rappresentare il numero di elementi nell&#39;elenco y. Dopo la generazione dell&#39;elenco, restituire solo i valori x.
```powerquery
List.Generate(
    () => [x = 1, y = {}],
    each [x] < 10,
    each [x = List.Count([y]), y = [y] & {x}],
    each [x]
)
```

Result: 
```powerquery
{1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
```




## Category
List.Generators
