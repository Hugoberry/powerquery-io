---
title: Logical.From
---

# Logical.From


Skapar ett logiskt värde från det angivna värdet.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

Returnerar ett `logical`\-värde från angiven `value`. Om `value` är `null` returnerar `Logical.From` `null`. Om `value` är `logical` returneras `value`. Värden av följande typer kan konverteras till ett `logical`\-värde:

-   `text`: Ett `logical`\-värde från textvärdet, antingen `"true"` eller `"false"`. Mer information finns under `Logical.FromText`.
-   `number`: `false` om `value` är lika med `0`, annars `true`.

Om `value` hör till en annan typ returneras ett fel.


## Examples

### Example #1
Konvertera `2` till ett `logical`\-värde.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
