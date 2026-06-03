---
title: Value.FromText
---

# Value.FromText


Creates a strongly-typed value from a textual representation.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Remarks

Decodes a value from a textual representation and interprets it as a value with an appropriate type.

-   `text`: The text to interpret.
-   `culture`: (Optional) A specific culture used to interpret the text (for example, "en-US").

This function takes a text value and returns a value of type `number`, `logical`, `null`, `datetime`, `duration`, or `text`. An empty text value is interpreted as a `null` value.


## Examples

### Example #1
Convert text representing a number to its corresponding number value.
```powerquery
Value.FromText("12345.6789")
```

Result: 
```powerquery
12345.6789
```


### Example #2
Convert text representing a percentage to its corresponding number value.
```powerquery
Value.FromText("25.4%")
```

Result: 
```powerquery
0.254
```


### Example #3
Convert text representing a French Euro value to its corresponding number value.
```powerquery
Value.FromText("€1,190", "fr-FR")
```

Result: 
```powerquery
1.19
```


### Example #4
Convert text representing a German date and time to its corresponding date and time value.
```powerquery
Value.FromText("24 Dez 2024 14:33:20", "de-DE")
```

Result: 
```powerquery
#datetime(2024, 12, 24, 14, 33, 20)
```




## Category
Text.Conversions from and to text
