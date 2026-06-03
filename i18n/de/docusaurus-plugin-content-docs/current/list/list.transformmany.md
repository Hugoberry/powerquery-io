---
title: List.TransformMany
---

# List.TransformMany


Gibt eine Liste auf der Grundlage der Eingabeliste zurück, deren Elemente mithilfe der angegebenen Funktionen transformiert wurden.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Remarks

Gibt eine Liste zurück, deren Elemente aus der Eingabeliste projiziert werden.  
  
Die Funktion „`collectionTransform`“ transformiert jedes Element in eine Zwischenliste, und die Funktion „`resultTransform`“ empfängt das ursprüngliche Element sowie ein Element aus der Zwischenliste, um das endgültige Ergebnis zu erstellen.  
  
Die Funktion „`collectionTransform`“ besitzt die Signatur „`(x as any) as list => ...`“, wobei „`x`“ ein Element in `list` ist. Die Funktion „`resultTransform`“ projiziert die Form des Ergebnisses und besitzt die Signatur „`(x as any, y as any) as any => ...`“, wobei „`x`“ ein Element in `list` und „`y`“ ein Element aus der Liste ist, das durch Übergeben von „`x`“ an `collectionTransform` generiert wird.


## Examples

### Example #1
Vereinfachen Sie eine Liste von Personen und ihren Haustieren.
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
