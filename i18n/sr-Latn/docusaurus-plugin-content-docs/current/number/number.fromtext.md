---
title: Number.FromText
---

# Number.FromText


Kreira brojeve od uobičajenih tekstualnih formata („15“, „3,423.10“, „5.0E-10“).


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Remarks

Vraća vrednost `number` od date tekstualne vrednosti, `text`.

-   `text`: Tekstualna reprezentacija brojčane vrednosti. Reprezentacija mora da bude u uobičajenom formatu broja, kao što su „15“, „3423,10“, „5.0E-10“.
-   `culture`: Opcionalna kultura koja kontroliše kako se `text` tumači (na primer, „en-US“).


## Examples

### Example #1
Dobijanje brojčane vrednosti za `"4"`.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2
Dobijanje brojčane vrednosti za `"5.0e-10"`.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
