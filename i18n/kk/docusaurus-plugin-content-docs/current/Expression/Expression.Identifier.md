---
title: Expression.Identifier
---

# Expression.Identifier


## Description

Идентификатордың M бастапқы коды көрінісін қайтарады.


## Syntax

```powerquery
Expression.Identifier(
    name as text
) as text
```


## Details

<code>name</code> идентификаторының M бастапқы коды көрінісін қайтарады.


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
