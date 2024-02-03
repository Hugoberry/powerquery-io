---
title: List.TransformMany
---

# List.TransformMany


## Description

Retorna una llista els elements de la qual es transformen a partir de la llista d&#39;entrada mitjançant funcions especificades.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Details

Retorna una llista els elements de la qual es projecten a partir de la llista d'entrada.<br />    <br />    La funció <code>collectionTransform</code> transforma cada element en una llista intermèdia i la funció <code>resultTransform</code> rep l'element original, així com un element de la llista intermèdia per construir el resultat final.<br />    <br />    La funció <code>collectionTransform</code> té la signatura <code>(x as any) as list => ...</code>, en què <code>x</code> és un element de <code>list</code>.    La funció <code>resultTransform</code> projecta la forma del resultat i té la signatura <code>(x as any, y as any) as any => ...</code>, en què <code>x</code> és un element de <code>list</code> i <code>y</code> és un element de la llista generat en passar <code>x</code> a <code>collectionTransform</code>.


## Examples

### Example #1 
Simplifiqueu una llista de persones i les seves mascotes.
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
