---
title: Text.PositionOfAny
---

# Text.PositionOfAny


## Description

Vrne prvi položaj v besedilni vrednosti katerega koli navedenega znaka (–1, če ni najden).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Details

Vrne prvi položaj katerega koli znaka na seznamu <code>characters</code>, ki je na voljo v <code>text</code>.
    Z izbirnim parametrom <code>occurrence</code> lahko določite, kateri položaj pojavitve bo vrnjen.


## Examples

### Example #1 
Poiščite prvi položaj znaka &#34;P&#34; ali &#34;s&#34; v besedilu &#34;Pozdravljen, svet!&#34;.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2 
Poiščite vse položaje znaka &#34;Š&#34; ali &#34;s&#34; v besedilu &#34;Pozdravljen, svet!&#34;.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
