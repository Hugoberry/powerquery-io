---
title: List.TransformMany
---

# List.TransformMany


Restituisce l'elenco degli elementi che vengono trasformati dall'elenco di input mediante le funzioni specificate.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Remarks

Restituisce un elenco i cui elementi vengono proiettati dall'elenco di input.  
  
La funzione `collectionTransform` trasforma ogni elemento in un elenco intermedio e la funzione `resultTransform` riceve l'elemento originale e un elemento dall'elenco intermedio per costruire il risultato finale.  
  
La funzione `collectionTransform` ha la firma `(x as any) come elenco => ...`, dove `x` è un elemento in `list`. La funzione `resultTransform` proietta la forma del risultato e ha la firma `(x come qualsiasi, y come qualsiasi) come qualsiasi =>...` , dove `x` è un elemento di `list` e `y` è un elemento dell'elenco generato passando `x` a `collectionTransform`.


## Examples

### Example #1
Appiattisci un elenco di persone e dei loro animali domestici.
```powerquery
List.TransformMany(
    {
        [Name = "Alice", Pets = {"Scruffy", "Sam"}],
        [Name = "Bob", Pets = {"Walker"}]
    },
    each [Pets],
    (person, pet) => [Name = person[Name], Pet = pet]
)
```

Result: 
```powerquery
{
    [Name = "Alice", Pet = "Scruffy"],
    [Name = "Alice", Pet = "Sam"],
    [Name = "Bob", Pet = "Walker"]
}
```




## Category
List.Transformation functions
