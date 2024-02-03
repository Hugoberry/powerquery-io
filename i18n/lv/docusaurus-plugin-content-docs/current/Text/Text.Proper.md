---
title: Text.Proper
---

# Text.Proper


## Description

Katra vārda pirmais burts tiek rakstīts ar lielo burtu.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Details

Tiek atgriezts rezultāts, kas iegūts, pārveidojot par lielajiem burtiem tikai katra vārda pirmo burtu teksta vērtībā <code>text</code>. Pārējie burti tiek atgriezti kā mazie burti. Var norādīt arī neobligātu parametru <code>culture</code> (piemēram, "lv-LV").


## Examples

### Example #1 
Vienkāršā teikumā lietojiet &lt;code&gt;Text.Proper&lt;/code&gt;.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
