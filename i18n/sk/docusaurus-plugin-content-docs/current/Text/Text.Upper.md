---
title: Text.Upper
---

# Text.Upper


## Description

Skonvertuje všetky znaky na veľké písmená.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Details

Vráti výsledok konverzie všetkých znakov v <code>text</code> na veľké písmená. Voliteľne sa tiež môže zadať <code>culture</code> (napríklad en-US).


## Examples

### Example #1 
Získajte verziu textu &#34;aBcD&#34; vo veľkých písmenách.
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
