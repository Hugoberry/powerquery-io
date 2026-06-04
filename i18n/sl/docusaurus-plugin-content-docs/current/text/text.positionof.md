---
title: Text.PositionOf
---

# Text.PositionOf


Vrne prvi položaj vrednosti (–1, če ni najden).


## Syntax

```powerquery
Text.PositionOf(
    text as text,
    substring as text,
    optional occurrence as Occurrence.Type,
    optional comparer as function
) as any
```


## Remarks

Vrne položaj navedene ponovitve besedilne vrednosti `substring`, ki je najdena v `text`. Z izbirnim parametrom `occurrence` lahko določite, kateri položaj ponovitve bo vrnjen (privzeto je vrnjena prva ponovitev). Vrne -1, če `substring` ni mogoče najti.

`comparer` je `Comparer`, ki se uporablja za nadzor primerjave. S primerjalniki je mogoče določiti primerjave, ki ne razlikujejo med velikimi in malimi črkami oziroma upoštevajo kulturo ali območne nastavitve.

Za jezik formule so na voljo ti vgrajeni primerjalniki:

-   `Comparer.Ordinal`: uporablja se za natančno primerjavo vrstilnih števnikov
-   `Comparer.OrdinalIgnoreCase`: uporablja se za natančno primerjavo vrstilnih števnikov, ki ne razlikuje med velikimi in malimi črkami
-   `Comparer.FromCulture`: uporablja se za primerjavo, ki upošteva kulturo


## Examples

### Example #1
Poiščite položaj prve pojavitve besede"World"v besedilu"Hello, World! Hello, World!".
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2
Poiščite položaj zadnje pojavitve besede"World"v"Hello, World! Hello, World!".
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
