---
title: Text.Proper
---

# Text.Proper


## Description

Pretvara prvo slovo svake reči u veliko slovo.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Details

Vraća rezultat pretvaranja samo prvog slova svake reči u veliko slovo u tekstualnoj vrednosti <code>text</code>. Sva druga slova se vraćaju u vidu malih slova. Opcionalno se može navesti i <code>culture</code> (na primer, „en-US“).


## Examples

### Example #1 
Upotreba &lt;code&gt;Text.Proper&lt;/code&gt; na prostoj rečenici.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
