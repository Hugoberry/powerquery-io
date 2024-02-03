---
title: Logical.ToText
---

# Logical.ToText


## Description

Pateikia tekstą kaip „true“ arba „false“ nurodžius loginę reikšmę.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Details

Sukuriama tekstinė reikšmė iš loginės reikšmės <code>logicalValue</code>, <code>true</code> arba <code>false</code>. Jei <code>logicalValue</code> nėra loginė reikšmė, pateikiama išimtis.


## Examples

### Example #1 
Sukurkite tekstinę reikšmę iš loginės reikšmės &lt;code&gt;true&lt;/code&gt;.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
