---
title: Expression.Identifier
---

# Expression.Identifier


Идентификатордың M бастапқы коды көрінісін қайтарады.


## Syntax

```powerquery
Expression.Identifier(
    name as text
) as text
```


## Remarks

`name` идентификаторының M бастапқы коды көрінісін қайтарады.


## Examples

### Example #1
Идентификатордың M бастапқы коды көрінісін алыңыз.
```powerquery
Expression.Identifier("MyIdentifier")
```

Result: 
```powerquery
"MyIdentifier"
```


### Example #2
Бос орын бар идентификатордың M бастапқы коды көрінісін алыңыз.
```powerquery
Expression.Identifier("My Identifier")
```

Result: 
```powerquery
"#""My Identifier"""
```




## Category
Expression
