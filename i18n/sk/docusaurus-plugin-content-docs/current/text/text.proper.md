---
title: Text.Proper
---

# Text.Proper


Zmení prvé písmeno každého slova na veľké písmeno.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Vráti výsledok zmeny iba prvého písmena každého slova v textovej hodnote `text` na veľké písmeno. Všetky ostatné písmená sa vrátia ako malé písmená. Voliteľne sa tiež môže zadať `culture` (napríklad en-US).


## Examples

### Example #1
Použite funkciu `Text.Proper` na jednoduchú vetu.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
