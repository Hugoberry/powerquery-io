---
title: Text.PositionOfAny
---

# Text.PositionOfAny


## Description

Pateikiama pirmoji bet kurio nurodyto simbolio padėtis tekstinėje reikšmėje (jei nerasta, pateikiama -1).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Details

Pateikia bet kurio sąrašo <code>characters</code> simbolio pirmąją padėtį, rastą <code>text</code>.
    Norint nurodyti, kurią atvejo padėtį pateikti, galima naudoti pasirenkamą parametrą <code>occurrence</code>.


## Examples

### Example #1 
Raskite „S“ arba „P“ pirmąją padėtį tekste „Sveikas, pasauli!“.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2 
Raskite visų „S“ arba „P“ padėtis tekste „Sveikas, pasauli!“.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
