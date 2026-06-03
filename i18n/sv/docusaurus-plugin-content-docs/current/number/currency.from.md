---
title: Currency.From
---

# Currency.From


Returnerar ett valutavärde från det givna värdet.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Returnerar ett `currency`\-värde från det givna `value`.Om det givna `value` är `null` returnerar `Currency.From` `null`. Om det givna `value` är `number` inom valutaintervallet, så avrundas decimaldelen av `value` till fyra decimaler och returneras. Om `value` är av en annan typ, konverteras den först till en `number` med `Number.FromText`. Giltigt intervall för valuta är `-922,337,203,685,477.5808` till `922,337,203,685,477.5807`. Mer information om tillgängliga avrundningslägen finns i `Number.Round`. Standardläget är `RoundingMode.ToEven`. En valfri `culture` kan även anges (till exempel, "en-US").


## Examples

### Example #1
Hämta `currency`\-värdet för `"1.23455"`.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2
Hämta `currency`\-värdet för `"1.23455"` genom att använda `RoundingMode.Down`.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
