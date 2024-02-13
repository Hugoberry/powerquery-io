---
title: Number.Round
---

# Number.Round


Returns the rounded number. The number of digits and rounding mode can be specified.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Returns the result of rounding <code>number</code> to the nearest number. If <code>number</code> is null, <code>Number.Round</code> returns null.<br />      <br />      By default, <code>number</code> is rounded to the nearest integer, and ties are broken by rounding to the nearest even number (using <code>RoundingMode.ToEven</code>, also known as "banker's rounding").<br />      <br />      However, these defaults can be overridden via the following optional parameters.      <ul>        <li><code>digits</code>: Causes <code>number</code> to be rounded to the specified number of decimal digits.</li>        <li><code>roundingMode</code>: Overrides the default tie-breaking behavior when <code>number</code> is at the midpoint between two potential rounded values      (refer to <code>RoundingMode.Type</code> for possible values).</li>      </ul>


## Examples

### Example #1 
Round 1.234 to the nearest integer.
```powerquery
Number.Round(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
Round 1.56 to the nearest integer.
```powerquery
Number.Round(1.56)
```

Result: 
```powerquery
2
```


### Example #3 
Round 1.2345 to two decimal places.
```powerquery
Number.Round(1.2345, 2)
```

Result: 
```powerquery
1.23
```


### Example #4 
Round 1.2345 to three decimal places (Rounding up).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Up)
```

Result: 
```powerquery
1.235
```


### Example #5 
Round 1.2345 to three decimal places (Rounding down).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Down)
```

Result: 
```powerquery
1.234
```




## Category
Number.Rounding
