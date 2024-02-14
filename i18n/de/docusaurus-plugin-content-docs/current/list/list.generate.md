---
title: List.Generate
---

# List.Generate


Generiert eine Liste von Werten.


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

Generiert eine Liste von Werten mithilfe der bereitgestellten Funktionen. Die Funktion <code>initial</code> generiert einen Startkandidatenwert, der dann gegen <code>condition</code> getestet wird.    Wenn der Kandidatenwert genehmigt wird, wird er als Teil der resultierenden Liste zurückgegeben, und der nächste Kandidatenwert wird generiert, indem der neu genehmigte Wert an <code>next</code> übergeben wird.    Sobald ein Kandidatenwert nicht mit <code>condition</code> übereinstimmt, wird der Listengenerierungsprozess beendet.    Ein optionaler Parameter <code>selector</code> kann ebenfalls bereitgestellt werden, um die Elemente in der resultierenden Liste zu transformieren.


## Examples

### Example #1 
Erstellen Sie eine Liste, indem Sie bei 10 beginnen, wiederholt um eins verringern und sicherstellen, dass jedes Element größer als Null ist.
```powerquery
List.Generate(() => 10, each _ > 0, each _ - 1)
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```


### Example #2 
Generiert eine Liste mit Datensätzen, die &#39;x&#39; und &#39;y&#39; enthalten, wobei &#39;x&#39; einem Wert und &#39;y&#39; einer Liste entspricht. &#39;x&#39; sollte kleiner als 10 sein und die Anzahl der in der Liste &#39;y&#39; enthaltenen Elemente darstellen. Nachdem die Liste generiert wurde, sollen nur die x-Werte zurückgegeben werden.
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
