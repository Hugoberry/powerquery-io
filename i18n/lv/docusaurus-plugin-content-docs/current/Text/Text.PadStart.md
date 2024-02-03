---
title: Text.PadStart
---

# Text.PadStart


## Description

Tiek atgriezts teksts norādītajā garumā, sniegtā teksta sākumā pievienojot papildinājumu.


## Syntax

```powerquery
Text.PadStart(
    text as text,
    count as number,
    optional character as text
) as text
```


## Details

Atgriež <code>text</code> vērtību ar papildinājumu līdz garumam <code>count</code>, ievietojot atstarpes teksta vērtības <code>text</code> sākumā.    Var izmantot neobligātu rakstzīmi <code>character</code>, lai norādītu papildinājumam izmantoto rakstzīmi. Noklusējuma bloka rakstzīme ir atstarpe.


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
