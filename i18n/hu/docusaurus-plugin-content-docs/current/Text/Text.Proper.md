---
title: Text.Proper
---

# Text.Proper


## Description

Nagybetűre alakítja minden szó első betűjét.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Details

Visszaadja annak a műveletnek az eredményét, amely a <code>text</code> szöveges értékben nagybetűre alakítja át az összes szó első betűjét. Az összes többi betűt kisbetűként adja vissza. Egy nem kötelező <code>culture</code> is megadható (például „en-US”).


## Examples

### Example #1 
Használja a &lt;code&gt;Text.Proper&lt;/code&gt; függvényt egy egyszerű mondatnál.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
