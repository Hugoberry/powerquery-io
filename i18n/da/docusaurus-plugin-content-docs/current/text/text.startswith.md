---
title: Text.StartsWith
---

# Text.StartsWith


Angiver, om teksten starter med en angivet værdi.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Returns true if text value `text` starts with text value `substring`.

-   `text`: A `text` value which is to be searched.
-   `substring`: A `text` value which is the substring to be searched for in `text`.
-   `comparer`: *(Optional)* A `Comparer` used for controlling the comparison. For example, `Comparer.OrdinalIgnoreCase` may be used to perform case-insensitive searches.

`comparer` is a `Comparer` which is used to control the comparison. Comparers can be used to provide case-insensitive or culture and locale-aware comparisons.

The following built-in comparers are available in the formula language:

-   `Comparer.Ordinal`: Used to perform an exact ordinal comparison.
-   `Comparer.OrdinalIgnoreCase`: Used to perform an exact ordinal case-insensitive comparison.
-   `Comparer.FromCulture`: Used to perform a culture-aware comparison.


## Examples

### Example #1
Kontrollér, om teksten "Hello, World" starter med teksten "hello".
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2
Kontrollér, om teksten "Hello, World" starter med teksten "Hello".
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```


### Example #3
Hvis du ignorerer store og små bogstaver, skal du kontrollere, om teksten "Hello, World" starter med teksten "hello".
```powerquery
Text.StartsWith("Hello, World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
