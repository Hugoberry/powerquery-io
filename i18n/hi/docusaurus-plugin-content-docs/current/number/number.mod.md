---
title: Number.Mod
---

# Number.Mod


पूर्णांक, दो संख्याओं को विभाजित करता है और शेषफल लौटाता है.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

<code>number</code> का <code>divisor</code> से पूर्णांक विभाजन करने के परिणामस्वरूप प्राप्त शेषफल लौटाता है.    यदि <code>number</code> या <code>divisor</code> नल हैं, तो <code>Number.Mod</code> नल लौटाता है.      <ul>        <li><code>number</code>: भाज्य.</li>        <li><code>divisor</code>: भाजक.</li>      </ul>


## Examples

### Example #1 
जब आप 5 को 3 से विभाजित करते हैं, तो शेषफल प्राप्त करें.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
