---
title: Text.Format
---

# Text.Format


## Description

Returnerar formaterad text från en formatsträng och argument.


## Syntax

```powerquery
Text.Format(
    formatString as text,
    arguments as any,
    optional culture as text
) as text
```


## Details

Returnerar formaterad text som har skapats genom att tillämpa <code>arguments</code> från en lista eller post till en formatsträng <code>formatString</code>. En valfri <code>culture</code> kan även anges (till exempel, "en-US").


## Examples

### Example #1 
Formatera en lista med tal.
```powerquery
Text.Format("#{0}, #{1}, and #{2}.", {17, 7, 22})
```

Result: 
```powerquery
"17, 7, and 22."
```


### Example #2 
Formatera olika datatyper från en post enligt kulturen Amerikansk engelska.
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
