---
title: List.TransformMany
---

# List.TransformMany


## Description

Palauttaa luettelon, jonka elementit muunnetaan syöteluettelosta käyttäen määritettyjä funktioita.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Details

Palauttaa luettelon, jonka elementit on projisoitu syöteluettelosta.<br />    <br />    <code>collectionTransform</code> -funktio muuntaa kunkin elementin väliluetteloksi, ja <code>resultTransform</code> -funktio vastaanottaa alkuperäisen elementin ja kohteen väliluettelosta lopullisen tuloksen muodostamiseksi.<br />    <br />    <code>collectionTransform</code> -funktiolla on allekirjoitus <code>(x) muodossa luettelo =>... </code>, jossa <code>x</code> on elementti kohteessa <code>list</code>.    <code>resultTransform</code> -funktio projisoi tuloksen muodon, ja sillä on allekirjoitus <code>(x minä tahansa, y minä tahansa) kuin minä tahansa =>... </code>, jossa <code>x</code> on elementti kohteessa <code>list</code> ja <code>y</code> on elementti luettelossa, joka luodaan välittämällä <code>x</code> kohteeseen <code>collectionTransform</code>.


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
