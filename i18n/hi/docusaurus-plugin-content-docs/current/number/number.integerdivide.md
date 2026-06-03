---
title: Number.IntegerDivide
---

# Number.IntegerDivide


दो संख्याओं को विभाजित करता है और परिणाम का पूर्णांक भाग लौटाता है.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Remarks

किसी संख्या `number1` को किसी अन्य संख्या `number2` से विभाजित करने पर आने वाले परिणाम का पूर्णांक भाग लौटाता है. यदि `number1` या `number2` नल हैं, तो `Number.IntegerDivide` नल लौटाता है.

-   `number1`: भाज्य.
-   `number2`: भाजक.


## Examples

### Example #1
6 को 4 से विभाजित करें.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2
8.3 को 3 से विभाजित करें.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
