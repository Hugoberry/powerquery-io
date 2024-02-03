---
title: Text.PadEnd
---

# Text.PadEnd


## Description

Vrátí text zadané délky odsazením konce daného textu.


## Syntax

```powerquery
Text.PadEnd(
    text as text,
    count as number,
    optional character as text
) as text
```


## Details

Vrátí <code>text</code>ovou hodnotu odsazenou na délku <code>count</code> vložením mezer na konec textové hodnoty <code>text</code>.    K určení znaku použitého k odsazení může být použit znak <code>character</code>. Výchozím výplňovým znakem je mezera.


## Examples

### Example #1 
Odsadí konec textové hodnoty, aby byla 10 znaků dlouhá.
```powerquery
Text.PadEnd("Name", 10)
```

Result: 
```powerquery
"Name      "
```


### Example #2 
Odsadí konec textové hodnoty pomocí znaku |, aby byla 10 znaků dlouhá.
```powerquery
Text.PadEnd("Name", 10, "|")
```

Result: 
```powerquery
"Name||||||"
```




## Category
Text.Transformations
