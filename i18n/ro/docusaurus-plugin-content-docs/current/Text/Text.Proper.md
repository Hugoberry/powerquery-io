---
title: Text.Proper
---

# Text.Proper


## Description

Scrie cu majusculă prima literă a fiecărui cuvânt.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Details

Returnează rezultatul scrierii cu majusculă numai a primei litere a fiecărui cuvânt din valoarea text <code>text</code>. Toate celelalte litere sunt returnate cu litere mici. De asemenea, poate fi furnizat un parametru <code>culture</code> opțional (de exemplu, „ro-RO”).


## Examples

### Example #1 
Utilizaţi &lt;code&gt;Text.Proper&lt;/code&gt; într-o propoziţie simplă.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
