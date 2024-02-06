---
title: Text.Proper
---

# Text.Proper


Maakt van de eerste letter van elk woord een hoofdletter.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Hiermee wordt het resultaat geretourneerd van de conversie van de eerste letter van elk woord naar een hoofdletter in tekstwaarde <code>text</code>. Alle andere letters worden geretourneerd als kleine letters. Er kan ook een optionele <code>culture</code> worden opgegeven (bijvoorbeeld: nl-NL).


## Examples

### Example #1 
&lt;code&gt;Text.Proper&lt;/code&gt; op een eenvoudige zin gebruiken.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
