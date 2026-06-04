---
title: List.TransformMany
---

# List.TransformMany


Palauttaa luettelon, jonka elementit muunnetaan syöteluettelosta käyttäen määritettyjä funktioita.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Remarks

Palauttaa luettelon, jonka elementit on projisoitu syöteluettelosta.  
  
`collectionTransform` -funktio muuntaa kunkin elementin väliluetteloksi, ja `resultTransform` -funktio vastaanottaa alkuperäisen elementin ja kohteen väliluettelosta lopullisen tuloksen muodostamiseksi.  
  
`collectionTransform` -funktiolla on allekirjoitus `(x) muodossa luettelo =>...` , jossa `x` on elementti kohteessa `list`. `resultTransform` -funktio projisoi tuloksen muodon, ja sillä on allekirjoitus `(x minä tahansa, y minä tahansa) kuin minä tahansa =>...` , jossa `x` on elementti kohteessa `list` ja `y` on elementti luettelossa, joka luodaan välittämällä `x` kohteeseen `collectionTransform`.


## Examples

### Example #1
Litistä ihmisten ja heidän lemmikkiensä luettelo.
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
