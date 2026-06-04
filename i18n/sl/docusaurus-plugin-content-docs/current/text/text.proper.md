---
title: Text.Proper
---

# Text.Proper


Prvo črko vsake besede zapiše z veliko začetnico.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Vrne rezultat, kjer je z veliko začetnico zapisana le prva črka vsake besede v besedilni vrednosti `text`. Preostale črke so zapisane kot male črke. Navedete lahko tudi izbirni parameter `culture` (na primer"sl-SI").


## Examples

### Example #1
Uporabite `Text.Proper` za preprost stavek.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
