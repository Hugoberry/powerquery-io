---
title: Text.PositionOf
---

# Text.PositionOf


## Description

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


## Details

Vrne položaj navedene ponovitve besedilne vrednosti <code>substring</code>, ki je najdena v <code>text</code>.    Z izbirnim parametrom <code>occurrence</code> lahko določite, kateri položaj ponovitve bo vrnjen (privzeto je vrnjena prva ponovitev).    Vrne -1, če <code>substring</code> ni mogoče najti.      <div>        <code>comparer</code> je <code>Comparer</code>, ki se uporablja za nadzor primerjave. S primerjalniki je mogoče določiti primerjave, ki ne razlikujejo med velikimi in malimi črkami oziroma upoštevajo kulturo ali območne nastavitve.      </div>      <div>        Za jezik formule so na voljo ti vgrajeni primerjalniki:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: uporablja se za natančno primerjavo vrstilnih števnikov</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: uporablja se za natančno primerjavo vrstilnih števnikov, ki ne razlikuje med velikimi in malimi črkami</li>        <li> <code>Comparer.FromCulture</code>: uporablja se za primerjavo, ki upošteva kulturo</li>      </ul>


## Examples

### Example #1 
Poiščite položaj prve pojavitve besede &#34;World&#34; v besedilu &#34;Hello, World! Hello, World!&#34;.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2 
Poiščite položaj zadnje ponovitve besede &#34;World&#34; v besedilu &#34;Hello, World! Hello, World!&#34;.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
