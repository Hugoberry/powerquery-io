---
title: Text.Proper
---

# Text.Proper


## Description

Kiekvieno žodžio pirmoji raidė pakeičiama į didžiąją.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Details

Pateikiamas tik pirmosios raidės kiekvieno žodžio tekstinėje reikšmėje <code>text</code> keitimo į didžiąją rezultatas. Visos kitos raidės pateikiamos kaip mažosios. Taip pat gali būti pateiktas pasirinktinis <code>culture</code> (pavyzdžiui, „en-US“).


## Examples

### Example #1 
Naudokite &lt;code&gt;Text.Proper&lt;/code&gt; paprastajame sakinyje.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
