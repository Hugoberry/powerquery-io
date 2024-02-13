---
title: Text.PadEnd
---

# Text.PadEnd


Returns text of a specified length by padding the end of the given text.


## Syntax

```powerquery
Text.PadEnd(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

Returns a <code>text</code> value padded to length <code>count</code> by inserting spaces at the end of the text value <code>text</code>.    An optional character <code>character</code> can be used to specify the character used for padding. The default pad character is a space.


## Examples

### Example #1 
Pad the end of a text value so it is 10 characters long.
```powerquery
Text.PadEnd("Name", 10)
```

Result: 
```powerquery
"Name      "
```


### Example #2 
Pad the end of a text value with &#34;|&#34; so it is 10 characters long.
```powerquery
Text.PadEnd("Name", 10, "|")
```

Result: 
```powerquery
"Name||||||"
```




## Category
Text.Transformations
