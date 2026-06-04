---
title: Function.From
---

# Function.From


Vytvorí funkciu so špecifickou signatúrou parametrov nad funkciou, ktorá prijíma jeden argument typu zoznam.


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Remarks

Vezme unárnu funkciu `function` a vytvorí novú funkciu s typom `functionType`, ktorá konštruuje zoznam zo svojich argumentov a odovzdá ho do funkcie `function`.


## Examples

### Example #1
Skonvertuje List.Sum na funkciu s dvoma argumentmi, ktorých hodnoty sa sčítajú.
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2
Skonvertuje funkciu prijímajúcu zoznam na funkciu s dvoma argumentmi.
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
