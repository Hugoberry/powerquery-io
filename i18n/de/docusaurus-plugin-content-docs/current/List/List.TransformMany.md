---
title: List.TransformMany
---

# List.TransformMany


## Description

Gibt eine Liste auf der Grundlage der Eingabeliste zurück, deren Elemente mithilfe der angegebenen Funktionen transformiert wurden.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Details

Gibt eine Liste zurück, deren Elemente aus der Eingabeliste projiziert werden.<br />    <br />    Die Funktion „<code>collectionTransform</code>“ transformiert jedes Element in eine Zwischenliste, und die Funktion „<code>resultTransform</code>“ empfängt das ursprüngliche Element sowie ein Element aus der Zwischenliste, um das endgültige Ergebnis zu erstellen. <br />    <br />    Die Funktion „<code>collectionTransform</code>“ besitzt die Signatur „<code>(x as any) as list => ...</code>“, wobei „<code>x</code>“ ein Element in <code>list</code> ist.    Die Funktion „<code>resultTransform</code>“ projiziert die Form des Ergebnisses und besitzt die Signatur „<code>(x as any, y as any) as any => ...</code>“, wobei „<code>x</code>“ ein Element in <code>list</code> und „<code>y</code>“ ein Element aus der Liste ist, das durch Übergeben von „<code>x</code>“ an <code>collectionTransform</code> generiert wird.


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
