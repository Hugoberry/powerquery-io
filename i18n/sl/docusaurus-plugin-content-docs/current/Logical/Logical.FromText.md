---
title: Logical.FromText
---

# Logical.FromText


## Description

Ustvari logično vrednost iz besedilnih vrednosti &#34;true&#34; in &#34;false&#34;.


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Details

Ustvari logično vrednost iz besedilne vrednosti <code>text</code>, ki je "true" ali "false". Če <code>text</code> vsebuje drugačen niz, pride do izjeme. Besedilna vrednost <code>text</code> ne razlikuje med velikimi in malimi črkami.


## Examples

### Example #1 
Ustvarite logično vrednost iz besedilnega niza &#34;true&#34;.
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2 
Ustvarite logično vrednost iz besedilnega niza &#34;a&#34;.
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
