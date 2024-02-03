---
title: Expression.Identifier
---

# Expression.Identifier


## Description

किसी पहचानकर्ता का M स्रोत कोड प्रस्तुतिकरण लौटाता है.


## Syntax

```powerquery
Expression.Identifier(
    name as text
) as text
```


## Details

किसी पहचानकर्ता <code>name</code> का M स्रोत कोड प्रस्तुतिकरण लौटाता है.


## Examples

### Example #1 
किसी पहचानकर्ता का M स्रोत कोड प्रस्तुतिकरण प्राप्त करें.
```powerquery
Expression.Identifier("MyIdentifier")
```

Result: 
```powerquery
"MyIdentifier"
```


### Example #2 
किसी ऐसे पहचानकर्ता का M स्रोत कोड प्रस्तुतिकरण प्राप्त करें जिसमें एक रिक्ति हो.
```powerquery
Expression.Identifier("My Identifier")
```

Result: 
```powerquery
"#""My Identifier"""
```




## Category
Expression
