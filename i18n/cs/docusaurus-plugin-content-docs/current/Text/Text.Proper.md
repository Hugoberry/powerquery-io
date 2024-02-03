---
title: Text.Proper
---

# Text.Proper


## Description

Změní první písmena jednotlivých slov na velká.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Details

Vrátí výsledek změny pouze prvních písmen jednotlivých slov v textové hodnotě <code>text</code> na velká. Všechna ostatní písmena jsou vrácena jako malá. Volitelně je možné zadat i <code>culture</code> (např. en-US).


## Examples

### Example #1 
Použije funkci &lt;code&gt;Text.Proper&lt;/code&gt; na jednoduchou větu.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
