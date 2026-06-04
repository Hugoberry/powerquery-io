---
title: Text.PadStart
---

# Text.PadStart


Vrátí text zadané délky odsazením začátku daného textu.


## Syntax

```powerquery
Text.PadStart(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

Vrátí `text`ovou hodnotu odsazenou na délku `count` vložením mezer na začátek textové hodnoty `text`. K určení znaku použitého k odsazení může být použit znak `character`. Výchozím výplňovým znakem je mezera.


## Examples

### Example #1
Odsadí začátek textové hodnoty, aby byla 10 znaků dlouhá.
```powerquery
Text.PadStart("Name", 10)
```

Result: 
```powerquery
"      Name"
```


### Example #2
Odsadí začátek textové hodnoty pomocí znaku |, aby byla 10 znaků dlouhá.
```powerquery
Text.PadStart("Name", 10, "|")
```

Result: 
```powerquery
"||||||Name"
```




## Category
Text.Transformations
