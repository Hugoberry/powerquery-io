---
title: Text.Split
---

# Text.Split


## Description

Divizează textul într-o listă de valori text în funcţie de un delimitator specificat.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Details

Returnează o listă de valori text care rezultă din divizarea unei valori text <code>text</code> în funcţie de delimitatorul specificat, <code>separator</code>.


## Examples

### Example #1 
Creaţi o listă din valoarea text delimitată de „|” „Name|Address|PhoneNumber”.
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
