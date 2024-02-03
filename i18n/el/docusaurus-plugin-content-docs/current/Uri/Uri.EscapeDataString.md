---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


## Description

Κωδικοποιεί ειδικούς χαρακτήρες σύμφωνα με το πρότυπο RFC 3986.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Details

Κωδικοποιεί ειδικούς χαρακτήρες στην είσοδο <code>data</code> σύμφωνα με τους κανόνες του προτύπου RFC 3986.


## Examples

### Example #1 
Κωδικοποίηση των ειδικών χαρακτήρων στο &#34;+money$&#34;.
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
