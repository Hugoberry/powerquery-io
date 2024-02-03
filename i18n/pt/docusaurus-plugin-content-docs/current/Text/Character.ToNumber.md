---
title: Character.ToNumber
---

# Character.ToNumber


## Description

Converts a character to a number value.


## Syntax

```powerquery
Character.ToNumber(
    character as text
) as number
```


## Details

Returns the number equivalent of the <code>character</code>.<br />    <br />    The result will be the 21-bit Unicode code point represented by the provided character or surrogate pair.  


## Examples

### Example #1 
Convert a character to its equivalent number value.
```powerquery
Character.ToNumber("#(tab)")
```

Result: 
```powerquery
9
```


### Example #2 
Convert the UTF-16 surrogate pair for the &#34;grinning face&#34; emoticon to its equivalent hexadecimal code point.
```powerquery
Number.ToText(Character.ToNumber("#(0001F600)"), "X")
```

Result: 
```powerquery
"1F600"
```




## Category
Text.Conversions from and to text
