---
title: Text.Proper
---

# Text.Proper


## Description

Inleder varje ord med versal.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Details

Returnerar resultatet då varje ord i textvärdet <code>text</code> inleds med versal. Alla andra bokstäver utom den första i orden visas med gemener. En valfri <code>culture</code> kan även anges (till exempel, "en-US").


## Examples

### Example #1 
Använd &lt;code&gt;Text.Proper&lt;/code&gt; i en enkel mening.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
