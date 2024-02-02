---
title: Character.ToNumber
---

# Character.ToNumber


## Description

Converts a character to its number value.


## Syntax

```powerquery
Character.ToNumber(
    character as text
) as number
```


## Details

Returns the number equivalent of the character, <code>character</code>.


## Examples

### Example #1 
Given the character &#34;#(tab)&#34; 9, find the number value.
```powerquery
Character.ToNumber("#(tab)")
```

Result: 
```powerquery
9
```




## Category
Text.Conversions from and to text
