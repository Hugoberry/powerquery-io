---
title: Text.Lower
---

# Text.Lower


## Description

Skonvertuje všetky znaky na malé písmená.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Details

Vráti výsledok konverzie všetkých znakov v <code>text</code> na malé písmená. Voliteľne sa tiež môže zadať <code>culture</code> (napríklad en-US).


## Examples

### Example #1 
Získajte verziu textu &#34;AbCd&#34; v malých písmenách.
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
