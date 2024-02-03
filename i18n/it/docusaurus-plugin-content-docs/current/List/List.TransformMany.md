---
title: List.TransformMany
---

# List.TransformMany


## Description

Restituisce l&#39;elenco degli elementi che vengono trasformati dall&#39;elenco di input mediante le funzioni specificate.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Details

Restituisce un elenco i cui elementi vengono proiettati dall'elenco di input.<br />    <br />    La funzione <code>collectionTransform</code> trasforma ogni elemento in un elenco intermedio e la funzione <code>resultTransform</code> riceve l'elemento originale e un elemento dall'elenco intermedio per costruire il risultato finale.<br />    <br />    La funzione <code>collectionTransform</code> ha la firma <code>(x as any) come elenco => ...</code>,  dove <code>x</code> è un elemento in <code>list</code>.    La funzione <code>resultTransform</code>  proietta la forma del risultato e ha la firma <code>(x come qualsiasi, y come qualsiasi) come qualsiasi =>... </code>, dove <code>x</code> è un elemento di <code>list</code> e <code>y</code> è un elemento dell'elenco generato passando <code>x</code> a <code>collectionTransform</code>.


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
