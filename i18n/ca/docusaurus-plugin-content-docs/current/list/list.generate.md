---
title: List.Generate
---

# List.Generate


Genera una llista de valors.


## Syntax

```powerquery
List.Generate(
    initial as function,
    condition as function,
    next as function,
    optional selector as function
) as list
```


## Remarks

Genera una llista de valors mitjançant les funcions proporcionades. La funció `initial` genera un valor candidat inicial, que posteriorment es prova amb `condition`. Si el valor candidat s’aprova, es retorna com a part de la llista resultant, i el següent valor candidat es genera passant el valor aprovat recentment a `next`. Quan un valor candidat no coincideix amb `condition`, el procés de generació de la llista s'atura. També es pot proporcionar un paràmetre opcional, `selector`, per transformar els elements de la llista resultant.


## Examples

### Example #1
Creeu una llista començant pel deu, disminuint repetidament d’un en un i comprovant que cada element sigui superior a zero.
```powerquery
List.Generate(() => 10, each _ > 0, each _ - 1)
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```


### Example #2
Genera una llista de registres que conté x i y, en què x és un valor i y és una llista. x hauria de ser més petit que 10 i representar el nombre d'elements de la llista y. Després que la llista s'hagi generat, es retornen només els valors x.
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
