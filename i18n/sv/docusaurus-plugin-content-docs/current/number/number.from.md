---
title: Number.From
---

# Number.From


Skapar ett tal från det angivna värdet.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Returnerar ett `number`\-värde från angiven `value`. En valfri `culture` kan även anges (till exempel, "en-US"). Om `value` är `null` returnerar `Number.From` `null`. Om `value` är `number` returneras `value`. Värden med följande typer kan konverteras till ett `number`\-värde:

-   `text`: Ett `number`\-värde från textrepresentationen. Vanliga textformat hanteras ("15", "3,423.10", "5.0E-10"). Mer information finns under `Number.FromText`.
-   `logical`: 1 för `true`, 0 för `false`.
-   `datetime`: Ett flyttal med dubbel precision som innehåller motsvarigheten till ett OLE-automationsdatum.
-   `datetimezone`: Ett flyttal med dubbel precision som innehåller ett OLE-automationsdatum för det lokala datumet och tiden, `value`.
-   `date`: Ett flyttal med dubbel precision som innehåller motsvarigheten till ett OLE-automationsdatum.
-   `time`: Uttrycks i fraktionella dagar.
-   `duration`: Uttrycks i hela och fraktionella dagar.

Om `value` hör till en annan typ returneras ett fel.


## Examples

### Example #1
Hämta `number`\-värdet för `"4"`.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Hämta `number`\-värdet för `#datetime(2020, 3, 20, 6, 0, 0)`.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3
Hämta `tal`värdet för `"12,3 %"`.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
