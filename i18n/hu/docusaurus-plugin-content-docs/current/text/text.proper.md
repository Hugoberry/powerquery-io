---
title: Text.Proper
---

# Text.Proper


Nagybetűre alakítja minden szó első betűjét.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Visszaadja annak a műveletnek az eredményét, amely a `text` szöveges értékben nagybetűre alakítja át az összes szó első betűjét. Az összes többi betűt kisbetűként adja vissza. Egy nem kötelező `culture` is megadható (például „en-US”).


## Examples

### Example #1
Használja a `Text.Proper` függvényt egy egyszerű mondatnál.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
