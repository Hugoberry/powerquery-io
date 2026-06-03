---
title: Logical.From
---

# Logical.From


दिए गए मान से एक तार्किक मान बनाता है.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

दिए गए `value` से एक `तार्किक` मान लौटाता है. यदि दिया गया `value` `नल` है, तो `Logical.From` `नल` लौटाता है. यदि दिया गया `value` `तार्किक` है, तो `value` लौटाया जाता है. निम्न प्रकार के मानों को एक `तार्किक` मान में रूपांतरित किया जा सकता है:

-   `पाठ`: पाठ मान से एक `तार्किक` मान, या तो `"true"` या `"false"`. विवरण के लिए `Logical.FromText` देखें.
-   `संख्या`: यदि `value` `0` के बराबर है तो `गलत` अन्यथा`सत्य`.

यदि `value` किसी भी अन्य प्रकार का है, तो एक त्रुटि लौटाई जाती है.


## Examples

### Example #1
`2` को एक `logical` मान में रूपांतरित करें.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
