---
title: Text.PositionOfAny
---

# Text.PositionOfAny


Vrne prvi položaj v besedilni vrednosti katerega koli navedenega znaka (–1, če ni najden).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Remarks

Vrne prvi položaj katerega koli znaka na seznamu `characters`, ki je na voljo v `text`. Z izbirnim parametrom `occurrence` lahko določite, kateri položaj pojavitve bo vrnjen.


## Examples

### Example #1
Poiščite prvi položaj znaka"P"ali"s"v besedilu"Pozdravljen, svet!".
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2
Poiščite vse položaje znaka"Š"ali"s"v besedilu"Pozdravljen, svet!".
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
