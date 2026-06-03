---
title: Number.FromText
---

# Number.FromText


Skapar tal från vanliga textformat ("15", "3,423.10", "5.0E-10").


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Remarks

Returnerar ett `number`\-värde från det angivna textvärdet, `text`.

-   `text`: Textrepresentationen av ett numeriskt värde. Representationen måste ha ett vanligt talformat, till exempel ”15”, ”3,423.10” eller ”5.0E-10”.
-   `culture`: Valfri kultur som styr hur `text` ska tolkas (till exempel ”en-US”).


## Examples

### Example #1
Hämta det numeriska värdet för `"4"`.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2
Hämta det numeriska värdet för `"5.0e-10"`.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
