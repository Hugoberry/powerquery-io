---
title: Text.Proper
---

# Text.Proper


## Description

Zmení prvé písmeno každého slova na veľké písmeno.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Details

Vráti výsledok zmeny iba prvého písmena každého slova v textovej hodnote <code>text</code> na veľké písmeno. Všetky ostatné písmená sa vrátia ako malé písmená. Voliteľne sa tiež môže zadať <code>culture</code> (napríklad en-US).


## Examples

### Example #1 
Použite funkciu &lt;code&gt;Text.Proper&lt;/code&gt; na jednoduchú vetu.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
