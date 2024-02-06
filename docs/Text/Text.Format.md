---
title: Text.Format
---

# Text.Format


Returns formatted text from a format string and arguments.


## Syntax

```powerquery
Text.Format(
    formatString as text,
    arguments as any,
    optional culture as text
) as text
```


## Remarks

Returns formatted text that is created by applying <code>arguments</code> from a list or record to a format string <code>formatString</code>. An optional <code>culture</code> may also be provided (for example, "en-US").


## Examples

### Example #1 
Format a list of numbers.
```powerquery
Text.Format("#{0}, #{1}, and #{2}.", {17, 7, 22})
```

Result: 
```powerquery
"17, 7, and 22."
```


### Example #2 
Format different data types from a record according to United States English culture.
```powerquery
Text.Format(
    "The time for the #[distance] km run held in #[city] on #[date] was #[duration].",
    [
        city = "Seattle",
        date = #date(2015, 3, 10),
        duration = #duration(0, 0, 54, 40),
        distance = 10
    ],
    "en-US"
)
```

Result: 
```powerquery
"The time for the 10 km run held in Seattle on 3/10/2015 was 00:54:40."
```




## Category
Text.Conversions from and to text
