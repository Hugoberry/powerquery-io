---
title: Text.Split
---

# Text.Split


Splits text into a list of text values based upon a specified delimiter.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

Returns a list of text values resulting from the splitting a text value <code>text</code> based on the specified delimiter, <code>separator</code>.


## Examples

### Example #1 
Create a list from the &#34;|&#34; delimited text value &#34;Name|Address|PhoneNumber&#34;.
```powerquery
Text.Split("Name|Address|PhoneNumber", "|")
```

Result: 
```powerquery
{
    "Name",
    "Address",
    "PhoneNumber"
}
```




## Category
Text.Transformations
