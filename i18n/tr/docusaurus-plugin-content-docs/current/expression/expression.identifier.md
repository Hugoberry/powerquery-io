---
title: Expression.Identifier
---

# Expression.Identifier


Bir tanımlayıcının M kaynak kodu gösterimini döndürür.


## Syntax

```powerquery
Expression.Identifier(
    name as text
) as text
```


## Remarks

Bir tanımlayıcının <code>name</code> M kaynak kodu gösterimini döndürür.


## Examples

### Example #1 
Bir tanımlayıcının M kaynak kodu gösterimini alır.
```powerquery
Expression.Identifier("MyIdentifier")
```

Result: 
```powerquery
"MyIdentifier"
```


### Example #2 
Boşluk içeren bir tanımlayıcının M kaynak kodu gösterimini alır.
```powerquery
Expression.Identifier("My Identifier")
```

Result: 
```powerquery
"#""My Identifier"""
```




## Category
Expression
