---
title: Text.Proper
---

# Text.Proper


Capitalizes the first letter of each word.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Returns the result of capitalizing only the first letter of each word in text value <code>text</code>. All other letters are returned in lowercase. An optional <code>culture</code> may also be provided (for example, "en-US").


## Examples

### Example #1 
Use &lt;code&gt;Text.Proper&lt;/code&gt; on a simple sentence.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
