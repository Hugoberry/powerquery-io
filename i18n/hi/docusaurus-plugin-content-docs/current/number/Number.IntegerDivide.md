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

किसी संख्या <code>number1</code> को किसी अन्य संख्या <code>number2</code> से विभाजित करने पर आने वाले परिणाम का पूर्णांक भाग लौटाता है.    यदि <code>number1</code> या <code>number2</code> नल हैं, तो <code>Number.IntegerDivide</code> नल लौटाता है.      <ul>        <li><code>number1</code>: भाज्य.</li>        <li><code>number2</code>: भाजक.</li>      </ul>


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
