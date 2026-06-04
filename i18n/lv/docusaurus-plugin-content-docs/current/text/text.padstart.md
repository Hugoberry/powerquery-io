---
title: Text.PadStart
---

# Text.PadStart


Tiek atgriezts teksts norādītajā garumā, sniegtā teksta sākumā pievienojot papildinājumu.


## Syntax

```powerquery
Text.PadStart(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

Atgriež `text` vērtību ar papildinājumu līdz garumam `count`, ievietojot atstarpes teksta vērtības `text` sākumā. Var izmantot neobligātu rakstzīmi `character`, lai norādītu papildinājumam izmantoto rakstzīmi. Noklusējuma bloka rakstzīme ir atstarpe.


## Examples

### Example #1
Pievienojiet papildinājumu teksta vērtības sākumā, lai tās garums būtu 10 rakstzīmes.
```powerquery
Text.PadStart("Name", 10)
```

Result: 
```powerquery
"      Name"
```


### Example #2
Pievienojiet papildinājumu | teksta vērtības sākumā, lai tās garums būtu 10 rakstzīmes.
```powerquery
Text.PadStart("Name", 10, "|")
```

Result: 
```powerquery
"||||||Name"
```




## Category
Text.Transformations
