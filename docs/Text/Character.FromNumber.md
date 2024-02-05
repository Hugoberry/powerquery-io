---
title: Character.FromNumber
---

# Character.FromNumber


## Description

Converts a number to a text character.


## Syntax

```powerquery
Character.FromNumber(
    number as number
) as text
```


## Details

Returns the character equivalent of the number.<br />    <br />    The provided <code>number</code> should be a 21-bit Unicode code point.


## Examples

### Example #1 
Convert a number to its equivalent character value.
```powerquery
Character.FromNumber(9)
```

Result: 
```powerquery
"#(tab)"
```


### Example #2 
Convert a character to a number and back again.
```powerquery
Character.FromNumber(Character.ToNumber("A"))
```

Result: 
```powerquery
"A"
```


### Example #3 
Convert the hexadecimal code point for the &#34;grinning face&#34; emoticon to its equivalent UTF-16 surrogate pair.
```powerquery
Character.FromNumber(0x1F600)
```

Result: 
```powerquery
"#(0001F600)"
```




## Category
Text.Conversions from and to text
