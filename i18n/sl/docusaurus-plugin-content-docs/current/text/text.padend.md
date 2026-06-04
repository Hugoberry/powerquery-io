---
title: Text.PadEnd
---

# Text.PadEnd


Vrne besedilo z navedeno dolžino, tako da zapolni konec danega besedila.


## Syntax

```powerquery
Text.PadEnd(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

Vrne `text` vrednost s polnilom do dolžine `count`, tako da vstavi presledke na koncu besedilne vrednosti `text`. Z izbirnim znakom `character` lahko določite znak, ki bo uporabljen za zapolnjevanje. Privzeti znak polnila je presledek.


## Examples

### Example #1
Zapolnite konec besedilne vrednosti, da bo njena dolžina 10 znakov.
```powerquery
Text.PadEnd("Name", 10)
```

Result: 
```powerquery
"Name      "
```


### Example #2
Zapolnite konec besedilne vrednosti z"|", da bo njena dolžina 10 znakov.
```powerquery
Text.PadEnd("Name", 10, "|")
```

Result: 
```powerquery
"Name||||||"
```




## Category
Text.Transformations
