---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


Κωδικοποιεί ειδικούς χαρακτήρες σύμφωνα με το πρότυπο RFC 3986.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Remarks

Κωδικοποιεί ειδικούς χαρακτήρες στην είσοδο `data` σύμφωνα με τους κανόνες του προτύπου RFC 3986.


## Examples

### Example #1
Κωδικοποίηση των ειδικών χαρακτήρων στο "+money$".
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
